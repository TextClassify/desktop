/* eslint-disable import/first */
import React, { Component } from 'react';
import { Row, Col, List, Avatar } from 'antd';
import {Link} from 'react-router';
import Detail from '../Detail/detail';

const fs = require('fs');
const csv = require('csvtojson');

const toLocalStorage = "/Users/laoqiren/textClassfiy/result.csv",
    toLocalStorageContent = "/Users/laoqiren/textClassfiy/resultContent.csv";

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            selectedIndex: 0
        }
     }
     transferPath(_path){
        let arr =  _path.split("/");
        return arr[arr.length - 1];
     }
     componentDidMount(){
        csv()
            .fromFile(toLocalStorage)
            .then(jsonObj=>{
                this.setState({
                    data: jsonObj.reverse()
                });
            });
     }
     render(){
         return (
            <div>
                <Row>
                    <Col span={8}>
                        <div style={{padding: '0 20',borderRight: '1px solid #D3D3D3'}}>
                            <h2 style={{borderBottom: '1px dotted gray'}}>我的收藏</h2>
                            <List
                                className="demo-loadmore-list"
                                itemLayout="horizontal"
                                dataSource={this.state.data}
                                renderItem={(item,i) => (
                                <List.Item onClick={()=>this.setState({
                                    selectedIndex: i
                                })} style={{backgroundColor: i===this.state.selectedIndex?'#D3D3D3':'' }}>
                                    <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<span>{this.transferPath(item.path)}</span>}
                                    description={item.class}
                                    />
                                </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                    <Col span={16}>
                        {
                            this.state.data.length>0 && <Detail path={this.state.data[this.state.selectedIndex]['path']}/>
                        }
                    </Col>
                </Row>
            </div>
         )
     }
}

export default Home;