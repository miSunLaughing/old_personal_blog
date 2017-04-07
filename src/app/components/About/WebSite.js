import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style={
  stepButton:{
      color:'#0f0'
  }
}
export default class WebSite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stepIndex: 0,
    };
  } 
  render() {
    const {stepIndex} = this.state;
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})} >
              v2.2.1
            </StepButton>
            <StepContent>              
                <p>博客文章管理系统ZWH-B上线</p>             
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 1})} >
              v2.1.2
            </StepButton>
            <StepContent>              
                <p>前端UI样式,使用less+flex.css</p>                          
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 2})} >
              v2.1.1
            </StepButton>
            <StepContent>
              
                <p>整体整合，UI更换，优化工程化部分。技术栈如下：</p>  
                <p>前端：material-ui + react + redux + react-router + es6 + fetch </p>  
                <p>后端：express + mongoose + mongodb </p>  
                <p>工程化：nodejs + webpack </p>  
                         
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 3})} >
              v2.0.1
            </StepButton>
            <StepContent>
              
                <p>前端技术栈升级，使用react全家桶。技术栈如下：</p>
                <p>前端：antDesign + react + redux + react-router + es6 + fetch </p>
                <p>后端：express + mongoose + mongodb </p>
                <p>工程化：nodejs + gulp + webpack </p>
                           
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 4})}>
              v1.0.1
            </StepButton>
            <StepContent>

              <p>前端技术栈升级，后端操作数据库使用中间组件。技术栈如下：</p> 
              <p> 前端：Amaze-react + react + fetch </p>
              <p>后端：express + mongoose + mongodb </p>
              <p>工程化：nodejs + gulp + webpack </p>
                          
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 5})}>
              v0.0.1
            </StepButton>
            <StepContent>

                <p>博客整体搭建。技术栈如下：</p>
                <p>前端：Jquery + AmazeUI </p>
                <p>后端：express + mongodb </p>
                <p>工程化：nodejs + gulp + webpack </p>
                            
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}
