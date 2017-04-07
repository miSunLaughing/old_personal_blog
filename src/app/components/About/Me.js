import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = { 
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'50%',
    margin:'0 auto'
  },
};
export default class WebSite extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <p>作者正在研究PS如何美颜。。。。。。</p>        
      </div>
    );
  }
}