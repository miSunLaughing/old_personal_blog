
import React, {Component} from 'react';
import {teal300,teal400,teal500,teal50,teal900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import Index from './components/Index';
import Footer from './components/Footer';
const styles = {
  container: {
    textAlign: 'center'    
  }
};
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: teal500,
    textColor:teal900,   
  },
});


class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}> 
          <div ><Header/></div>
          <div>{this.props.children || <Index/>}</div>          
        </div>        
      </MuiThemeProvider>
    );
  }
}

export default Main;
