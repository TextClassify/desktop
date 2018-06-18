import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import List from '../List/List';
import Detail from '../Detail/detail';
const Search = Input.Search;

const fs = require('fs');
const csv = require('csvtojson');

const { toLocalStorage, toLocalStorageContent } = require('../../config');

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchResult: [],
            selectedIndex: 0
        }
    }
    componentDidMount(){
        let term = this.props.params.term
        csv()
            .fromFile(toLocalStorage)
            .then(jsonObj=>{
                this.setState({
                    data: jsonObj
                });
                if(term !== 'all'){
                    this.handleSearch(term);
                }
            });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.params.term !== this.props.params.term){
            this.handleSearch(nextProps.params.term);
        }
    }
    handleSearch(value){
        let result = this.state.data.filter(item=>{
            return RegExp(value).test(item.path);
        });
        this.setState({
            searchResult: result
        });
    }
    handleIndexChanged(i){
        this.setState({
            selectedIndex: i
        });
    }
    render(){
        return (
            <div style={{minHeight: '710px'}}>
                <h2 style={{margin:20,marginLeft:20}}>搜索内容</h2>
                <Search
                placeholder="搜索内容"
                onSearch={value=>this.handleSearch(value)}
                size="large"
                enterButton
                />
                {
                    this.state.searchResult.length > 0 && <div style={{marginTop: '30px'}}>
                         <Row>
                            <Col span={8}>
                                <List data={this.state.searchResult} title="搜索结果" changeIndexBubble={this.handleIndexChanged.bind(this)} />
                            </Col>
                            <Col span={16}>
                                <Detail path={this.state.searchResult[this.state.selectedIndex]['path']} />
                            </Col>
                        </Row>
                    </div>
                }
                {
                    this.state.searchResult.length <= 0 && (
                        <div style={{margin:20,marginLeft:400}}>暂无搜索结果，要不试试其他关键词？</div>
                    )
                }
            </div>
        )
    }
}

export default SearchComponent;