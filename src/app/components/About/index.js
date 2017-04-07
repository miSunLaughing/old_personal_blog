import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {teal50,teal100,teal300,teal900} from 'material-ui/styles/colors'
import WebSite from './WebSite';
import Me from './Me';
const style = {
  container: {
    marginTop:'50px',
    width:'50%',
    margin:'0 auto'
  },
  tab:{
    backgroundColor:teal50,
    color:teal900,       
    'borderBottom':'2px solid '+teal100,
    'borderTop':'1px solid '+teal100
  }

};

 class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value){
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div style={style.container}>
          <Tabs
            value={this.state.value}
            onChange={()=>{this.handleChange()}}
          >
            <Tab label="关于博客" value="a"  style={style.tab} >
              <div>
               <WebSite/>
              </div>
            </Tab>
            <Tab label="关于作者" value="b" style={style.tab}>
              <Me/>
            </Tab>
          </Tabs>
      </div>
    );
  }
}
module.exports = About;