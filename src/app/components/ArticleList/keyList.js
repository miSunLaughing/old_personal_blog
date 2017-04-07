import React,{Component} from 'react';
import { useRouterHistory} from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {teal50,teal100} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const styles = { 
  container: {
    textAlign: 'left'    
  },
  chip:{
    margin:5,
    height:32    
  },
  tags:{
    display:'flex',
    flexWrap:'wrap'
  }
};
class Key extends Component{
  constructor(props){
    super(props);
  }
  onClick(){
    this.props.actions.tagParams({tag:this.props.tag});
    let data='key='+this.props.tag;
    this.props.actions.searchList(data);
    const path = "/blog/article/tags/" + this.props.tag;
    appHistory.push(path);
  }
  render(){    
    return(        
          <Chip onTouchTap={()=>{this.onClick()}} style={styles.chip} backgroundColor={teal50}>            
            <Avatar  backgroundColor={teal100} color={teal50} size={26} >
              {this.props.num}
            </Avatar> 
            {this.props.tag}
          </Chip>                    
    );
  }
}
const mapStateToPops=(state)=>{
  return { }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
const Tag=connect(mapStateToPops,mapDispatchToProps)(Key);
const KeyList =({dataSource}) =>{
  const list=[];
  for(let value in dataSource){
    list.push(<Tag key={value}  tag={dataSource[value].key}  num={dataSource[value].num}/>);
  }
  return  <div className="tags-list" style={styles.tags}>            
              {list}
          </div>
}
export default KeyList;

// <div className="info-list">
//     <div className="article-catalog">
//     </div>
//     <div className="white-board"></div>
//     <div className="date-list">
//       <Paper>               
//         <List>
//           <ListItem primaryText="Inbox" style={styles.listItem} leftIcon={<ActionGrade />}/>
//           <ListItem primaryText="Starred" style={styles.listItem} leftIcon={<ActionGrade />}/>
//           <ListItem primaryText="Sent mail" style={styles.listItem} leftIcon={<ActionGrade />}/>
//           <ListItem primaryText="Drafts"  style={styles.listItem} leftIcon={<ActionGrade />}/>
//           <ListItem primaryText="Inbox" style={styles.listItem} leftIcon={<ActionGrade />}/>
//         </List> 
//       </Paper>
//     </div>
//     <div className="tags-list" style={styles.tags}>
//       </Paper>
//         <Chip onTouchTap={()=>{this.handleTouchTap()}} >
//           <Avatar size={32}>CSS</Avatar>
//           CSS3
//         </Chip>
//         <Chip onTouchTap={()=>{this.handleTouchTap()}} >
//           <Avatar size={32}>CSS</Avatar>
//           CSS3
//         </Chip>
//         <Chip onTouchTap={()=>{this.handleTouchTap()}} >
//           <Avatar size={32}>CSS</Avatar>
//           CSS3
//         </Chip>
//       </Paper>
//     </div>
// </div>