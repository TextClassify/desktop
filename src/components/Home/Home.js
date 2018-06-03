/* eslint-disable import/first */
import React, { Component } from 'react';
import {Button,Layout,Steps,Icon} from 'antd';
const Step = Steps.Step;
import {Link} from 'react-router';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
        };
     }
     render(){
         if (this.state.user=="") {
             return (
                 <div>
                     <h1>基于机器学习方法的文本自动分类项目-Desktop</h1>
                     <Steps style={{maxWidth: '600px',marginLeft: '100px'}}>
                     <Step status="finish" title={<Link to="/NormalLoginForm" onClick={()=>this.setState({user:"123"})}>登陆</Link>} icon={<Icon type="user" />} />
                     <Step status="finish" title={<Link to="/importText">导入内容</Link>} icon={<Icon type="solution" />} />
                     <Step status="process" title="自动分类" icon={<Icon type="loading" />} />
                     <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                     </Steps>
                     <Link to="/add">跳转到添加</Link>
                 </div>
             )
         }else{
             return (
                 <div>
                     <h1>基于机器学习方法的文本自动分类项目-Desktop</h1>
                     <Steps style={{maxWidth: '600px',marginLeft: '100px'}}>
                     <Step status="finish" title={<Link to="/importText">导入内容</Link>} icon={<Icon type="solution" />} />
                     <Step status="process" title="自动分类" icon={<Icon type="loading" />} />
                     <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                     </Steps>
                     <Link to="/add">跳转到添加</Link>
                 </div>
             )
         }
     }
}

export default Home;