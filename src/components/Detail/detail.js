import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
const fs = require('fs');

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }
    componentDidMount(){
        this.readContent(this.props.path);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.path !== this.props.path){
            this.readContent(nextProps.path);
        }
    }
    transferPath(_path){
        let arr =  _path.split("/");
        return arr[arr.length - 1];
     }
    readContent(_path){
        fs.readFile(_path,(err,data)=>{
            if(err){
                this.setState({
                    content: '读取内容出错'
                });
                return;
            }
            this.setState({
                title: this.transferPath(_path),
                content: data.toString()
            })
        });
    }
    render(){
        return (
            <div style={{padding: 20,minHeight: '710px'}}>
                <h2 style={{borderBottom: '1px dotted gray'}}>
                    <Row>
                        <Col span={20}>{this.state.title}</Col>
                        <Col span={1}>
                            <Icon type="form" />
                        </Col>
                        <Col span={1}>
                            <Icon type="tag-o" />
                        </Col>
                        <Col span={1}>
                            <Icon type="share-alt" />
                        </Col>
                        <Col span={1}>
                            <Icon style={{color: 'red'}} type="delete" />
                        </Col>
                    </Row>
                </h2>
                {
                    this.state.content
                }
            </div>
        )
    }
}

export default Detail;