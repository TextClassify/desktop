import React, { Component } from 'react';
import API from "../../API/api";
import { Input, Button } from 'antd';
const fs = require('fs');
const path = require('path');
const { toLocalStorage, toLocalStorageContent } = require('../../config');
const { Search, TextArea} = Input;

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            isFile: false,
            inputTitle: '',
            inputContent: null,
            selectFile: null,
            classifyResult: null
        }
    }
    showFileDialog(){
        const dialog = require('electron').remote.dialog
        dialog.showOpenDialog({ properties: ['openFile'] }, (filename) => {
            filename && this.setState({selectFile: filename[0]});
        });
    }
    handleSubmit(){
        this.setState({
            isLoading: true
        });
        fs.readFile(this.state.selectFile,(err,data)=>{
            if(err){
                this.setState({isLoading: false});
                return;
            }
            this.handleCommit(data);
        });
    }
    async handleCommit(data, isEnter=false){
        const { host, classifyOneText } = API;
        !this.state.isLoading && this.setState({isLoading: true});

        try {
            let res = await fetch(host+classifyOneText,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: data.toString()
                })
            });
            if(res.ok){
                let result = await res.json();
                if(result.code === 0) {
                    let classResult = this.selectClass(result.data);
                    this.setState({
                        isLoading: false,
                        classifyResult: classResult
                    });

                    if(!isEnter) {
                        let toWriteContent = `\n${this.state.selectFile},${classResult}`;
                        fs.appendFile(toLocalStorage,toWriteContent,()=>{});
                    } else {
                        let toWritePath = path.join(toLocalStorageContent,this.state.inputTitle);
                        fs.writeFile(toWritePath,this.state.inputContent,()=>{});

                        let toWriteContent = `\n${toWritePath},${classResult}`;
                        fs.appendFile(toLocalStorage,toWriteContent,()=>{});
                    }
                }
            }
        }catch(err) {
            this.setState({
                isLoading: false,
                classifyOneText: "分类出错"
            });
        };
    }
    selectClass(resultObj){
        let objToArr = Object.entries(resultObj).map(tup=>{
            return {
                className: tup[0],
                percent: tup[1]
            };
        });
        let sortedByPercent = objToArr.sort((obj1,obj2)=>{
            return obj1.percent < obj2.percent;
        });
        return sortedByPercent[0]['className'];
    }
    render() {
        return (
            <div>
                <h2>添加收藏</h2>
                {
                    !this.state.isFile && (
                        <div>
                            <Input placeholder="输入标题" onChange={e=>this.setState({inputTitle: e.target.value})} value={this.state.inputTitle}/><br/><br/>
                            <TextArea rows={4} value={this.state.inputContent} onChange={e=> this.setState({inputContent: e.target.value})} />
                            <Button type="primary" disabled={!this.state.inputContent} onClick={ e=> this.handleCommit(this.state.inputContent,true)}>提交分类</Button>
                            <Button type="primary" onClick={()=>this.setState({isFile: true})}>本地文件</Button>
                        </div>
                    )
                }
                {
                    this.state.isFile && (
                        <div>
                            <Search
                            placeholder="选择本地文件"
                            enterButton="选取"
                            size="large"
                            disabled={true}
                            value={this.state.selectFile}
                            onSearch={() => this.showFileDialog()}
                            />
                            <br/><br/>
                            <Button type="primary" onClick={()=> this.handleSubmit()} disabled={!this.state.selectFile}>提交分类</Button>
                            <Button type="primary" onClick={()=>this.setState({isFile: false})}>手动输入内容</Button>
                        </div>
                    )
                }
                {
                    this.isLoading && (
                       <h3>机器学习算法分类中...</h3>
                    )
                }
                {
                    !this.isLoading && this.state.classifyResult && (
                        <h3>分类结果：{this.state.classifyResult} </h3>
                    )
                }
            </div>
        )
    }
}

export default Add;