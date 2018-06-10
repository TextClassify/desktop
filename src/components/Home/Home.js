/* eslint-disable import/first */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Detail from '../Detail/detail';
import List from '../List/List'

const fs = require('fs');
const csv = require('csvtojson');

const { toLocalStorage, toLocalStorageContent } = require('../../config');
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            selectedIndex: 0
        }
     }
     componentDidMount(){
        csv()
            .fromFile(toLocalStorage)
            .then(jsonObj=>{
                this.setState({
                    data: this.filterByClass(jsonObj)
                });
            });
     }
     filterByClass(sourceData){
        let classToShow = this.props.params.class;
        if(!classToShow){
            return sourceData.reverse();
        }
        return sourceData.filter(item=>{
            return item.class === classToShow;
        }).reverse();
     }
     handleIndexChanged(i){
         this.setState({
             selectedIndex: i
         });
     }
     render(){
         return (
            <div style={{height: '100%', maxHeight: '800px',overflow: 'scroll'}}>
                <Row>
                    <Col span={8}>
                        <List data={this.state.data} title="我的收藏" changeIndexBubble={this.handleIndexChanged.bind(this)}/>
                    </Col>
                    <Col span={16}>
                        {
                            this.state.data.length>0 && <Detail path={this.state.data[this.state.selectedIndex]['path']} />
                        }
                    </Col>
                </Row>
            </div>
         )
     }
}

export default Home;