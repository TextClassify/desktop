import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class ImportContent extends React.Component{
    constructor(pros){
        super(pros);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            textValue: '',
        }
    }
    handleClick(){
        var data = this.state;
        let body = new FormData()
        body.append("text",this.state.textValue)
       // debugger
        fetch('http://120.24.66.93:8088/api/oneText', {
            method: 'POST',
            headers: {
            },
            body
          }).then(function(response) {
                return response.json()
              }).then(function(json) {
                console.log('parsed json', json)
                alert(JSON.stringify(json.data))
                
              }).catch(function(ex) {
                console.log('parsing failed', ex)
                alert("失败")
              })
    }
    render(){
        return(
            <div className="container">
                <form className="classify_text_form" method="post" action="http://120.24.66.93:8088/api/oneText">
                    <TextArea value={this.state.textValue} onInput={(e)=>{this.setState({textValue:e.target.value})}}/>
                    <input type="button" value="提交去分类" onClick={()=>this.handleClick()}/>
                </form>
            </div> 
        );
    }
}

export default ImportContent;