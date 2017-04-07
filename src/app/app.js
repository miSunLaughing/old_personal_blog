import React,{Component} from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk' 
import {Provider,connect} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from "redux"
import { Router, Route, IndexRoute, Link, IndexLink, useRouterHistory  } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import reducers from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {teal50,teal100,teal300,teal400,teal500,teal700,teal900,tealA400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import FlatButton from 'material-ui/FlatButton';
import Index from './components/Index';
import Footer from './components/Footer';
// import comAbout from './components/About'; 
// import comSearch from './components/Search'; 
import Article from './components/Article'; 


injectTapEventPlugin();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
let store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware)
);
const style = {
  container: {
    textAlign: 'center'    
  },
  active:{
  	backgroundColor:teal500,
  	height:'36px',			
  	display:'inline-block'	
  },
  header:{
  	'backgroundColor':teal300,
  }, 
  btn:{
  	color:teal50
  }
};
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: teal500,
    textColor:teal900,   
  },
});
// const Article={
//   path:'article',
//   getComponent(nextState,cb){
//     require.ensure([],(require)=>{
//       return cb(null,require('./components/Article'))
//     })
//   }
// }
const About={
  path:'about',
  getComponent:(nextState,cb)=>{
    require.ensure([],(require)=>{
      return cb(null,require('./components/About'))
    })
  }
}
const Search={
  path:'search/:keyWords',
  getComponent(nextState,cb){
    require.ensure([],(require)=>{
      return cb(null,require('./components/Search'))
    })
  }
}
const Tags={
  path:'tags/:tag',
  getComponent(nextState,cb){
    require.ensure([],(require)=>{
      return cb(null,require('./components/Tags'))
    })
  }
}
const Detail={
  path:'detail/:id',
  getComponent(nextState,cb){
    require.ensure([],(require)=>{
      return cb(null,require('./components/Detail'))
    })
  }
}
class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      completed: 0,
      display:true
    };
  }
  componentWillReceiveProps(){
    this.timer = setTimeout(() => this.progress(5), 10);
  }
  componentDidMount(){  
    clearTimeout(this.timer);
    this.setState({completed: 100,display:false});    
  }
  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100,display:false});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 10);
    }
  }
  render(){
    return(
      <div>
        {this.state.display?<LinearProgress color={tealA400} mode="determinate" value={this.state.completed} />:''}
        <div style={style.header}>    
            <IndexLink to="/" activeStyle={style.active} ><FlatButton label="首页"  rippleColor={teal700}    hoverColor={teal400} style={style.btn} /></IndexLink>
            <Link to="blog/article" activeStyle={style.active}><FlatButton label="文章" rippleColor={teal700}    hoverColor={teal400} style={style.btn} /></Link>
            <Link to="blog/about" activeStyle={style.active}><FlatButton label="关于"   rippleColor={teal700}    hoverColor={teal400} style={style.btn} /></Link>     
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }    
}
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={style.container}>
          <div>{this.props.children || <Index/>}</div>                    
        </div>        
      </MuiThemeProvider>
    );
  }
}

const rootRoutes={
	path:'/',
	component:App,
	childRoutes:[		
		{
      path:'blog',
      component:Blog,
      childRoutes:[
        {     
          path:'article',    
          component:Article,
          childRoutes:[
            Search,
            Detail,
            Tags
          ]
        },        
        About,        
      ]
    }
	]	
}
 render((
    <Provider store={store}>
        <Router history={appHistory} routes={rootRoutes}>        	
        </Router>
 	</Provider>
),document.getElementById("app"))

