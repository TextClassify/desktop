import React, { Component } from 'react';
const fs = require('fs');

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }
    componentDidMount(){
        this.readContent();
    }
    componentDidUpdate(){
        this.readContent();
    }
    readContent(){
        fs.readFile(this.props.path,(err,data)=>{
            if(err){
                this.setState({
                    content: '读取内容出错'
                });
                return;
            }
            this.setState({
                content: data.toString()
            })
        });
    }
    render(){
        return (
            <div style={{padding: 20}}>
                {
                    this.state.content
                }
            </div>
        )
    }
}

export default Detail;