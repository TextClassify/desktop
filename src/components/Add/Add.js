import React, { Component } from 'react';
import process from 'process';
import * as fs from "fs";
import * as path from 'path';
class Add extends Component {
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