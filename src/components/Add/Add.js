import React, { Component } from 'react';
import process from 'process';
import * as fs from "fs";
import * as path from 'path';
class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: 0
        }
    }
    componentDidMount(){
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);    // 第 1 次 log

        this.setState({val: this.state.val + 1});
        console.log(this.state.val);    // 第 2 次 log

        setTimeout(() => {
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 3 次 log

        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 4 次 log
        }, 0);
    }
    selectFile(){
        fs.readFile(path.join(process.cwd(),'src/components/Home/Home.js'),(err,data)=>{
            if(err) return;
            alert(data);
        })
    }
    render() {
        return (
            <div>
                添加收藏
                <button onClick={()=>this.selectFile()}>测试文件</button>
            </div>
        )
    }
}

export default Add;