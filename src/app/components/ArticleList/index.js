import React,{Component} from 'react';
import { useRouterHistory} from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {teal50,green50,grey50,teal100} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const styles = { 
  container: {
    textAlign: 'left'    
  },
  oddList:{
    backgroundColor:green50
  },
  evenList:{
    backgroundColor:grey50
  }
};
class ArticleItem extends Component{
  constructor(props){
    super(props);
  }
  onClick(){
    const path = "/blog/article/detail/" + this.props.id;
    appHistory.push(path);
  }
  render(){
    const title=this.props.date.replace(/(\d{4})-(\d*)-(\d*)/,'$1年$2月$3日')+"  "+this.props.title;
    const keyDes=this.props.des;    
    return(
      <ListItem         
        primaryText={title}         
        secondaryText={keyDes} 
        leftAvatar={<Avatar src={this.props.avatar} />}
        onTouchTap={()=>{this.onClick()}}
        style={this.props.style}
        hoverColor={teal100}
      />          
    );
  }
}
const ArticleList =({dataSource}) =>{
  const list=[];
  for(let value in dataSource){
    list.push(<ArticleItem key={value} avatar={dataSource[value].avatar} style={(value%2 == 0 )?styles.evenList : styles.oddList} id={dataSource[value]._id} date={dataSource[value].date} title={dataSource[value].title} des={dataSource[value].des} />);
  }
  return <div style={styles.container}>    
          <List>            
            {list}
          </List>    
      </div>
}
export default ArticleList;