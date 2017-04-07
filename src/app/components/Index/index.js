import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import {Link} from 'react-router';
import config from '../../colors.config';

// 16进制转换为10进制
const tranfer=(data)=>{
  const str16={
    a:10,
    b:11,
    c:12,
    d:13,
    e:14,
    f:15
  };  
  const result=[];
  for(let i=0,j=data.length;i<j;i++){
    result[i]=/[0-9]/.test(data[i])?data[i]-0:str16[data[i]];
  }  
  return result;
}
class Color extends Component{  
  constructor(props) {
    super(props)
  }
  changeTheme(){
    this.props.actions.changeTheme(this.props.data);
  }
  render(){
    const data=this.props.data;
    const color='#'+data.data;
    const dataRgb=tranfer(data.data);   
    const length={
      r:Math.round(((dataRgb[0]*16+dataRgb[1])/256)*100)+""+"%",
      g:Math.round(((dataRgb[2]*16+dataRgb[3])/256)*100)+""+"%",
      b:Math.round(((dataRgb[4]*16+dataRgb[5])/256)*100)+""+"%",    
    };
    return (
      <div className="colors" onClick={()=>{this.changeTheme()}}>
        <div className="show" style={{backgroundColor:color}}></div>
        <div className="nameZn" style={{color:color}}>{data.nameC}</div>
        <div className="dataRgb">{data.data}</div>
        <div className="infoData">
          <div className="data "><div className="dataR" style={{height:length.r}}></div></div>
          <div className="data "><div className="dataG" style={{height:length.g}}></div></div>
          <div className="data "><div className="dataB" style={{height:length.b}}></div></div>
        </div>
        <div className="nameEn">{data.nameE}</div>
      </div>
    );
  }
}
const colorMapStateToProps=(state)=>{
  return{
    colors:state.indexColor
  }
}
const colorMapActionToProps=(dispatch)=>{
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}
const Colors = connect(colorMapStateToProps,colorMapActionToProps)(Color);
const ColorsList=({dataSrouce})=>{
    const itemsList=[];    
    for(let key in dataSrouce){
      itemsList.push(<Colors key={key} data={dataSrouce[key]} />);
    }     
    return  <div className="colorsShow" >{itemsList}</div>;
}
const HistoryClolrs=({data})=>{
  const itemsList=[];const values=data;
  for(let i=0,j=values.length; i<j; i++){
    itemsList.push(<div className="historyClolrs" title={'#'+values[i].data} key={i} style={{backgroundColor:'#'+values[i].data}}></div>);
  }
  return <div className="infoBlock bgWhite">{itemsList}</div>
}

class Index extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const currentColor=this.props.colors;   
    const normalColor="#"+currentColor.color.data;
    return (
      <div className="container">
        <div className="left" style={{backgroundColor:normalColor}}> 
          <div style={{backgroundColor:normalColor}}>
            <ColorsList dataSrouce={config}/>    
          </div> 
        </div>
        <div className="right" style={{backgroundColor:normalColor}}>
          <div className="fixedLeft">
            <HistoryClolrs data={currentColor.historyColor}/>
            <div className="infoBlock bgBlack">
              <Link to="blog/article">文章</Link>
              <Link to="blog/about">关于</Link>
            </div>
            <div className="infoBlockRe bgBlack">
              <span className="copyRight"><br/>版<br/>权<br/>所<br/>有<br/></span>
              <span className="copyRight"><br/>钟<br/>文<br/>浩<br/>的<br/>博<br/>客<br/></span>
            </div>
            <div className="infoBlockRe bgWhite"></div>
          </div>
          <div className="fixedRight">
            <div className="infoContent">{currentColor.color.nameC}</div>
            <div>{"#"+currentColor.color.data.toUpperCase()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    colors:state.indexColor
  }
}
const mapActionToProps=(dispatch)=>{
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps,mapActionToProps)(Index);