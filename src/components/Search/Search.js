import React, { Component } from 'react';
import { Input } from 'antd';
import List from '../List/List';
const Search = Input.Search;

const fs = require('fs');
const csv = require('csvtojson');

const { toLocalStorage, toLocalStorageContent } = require('../../config');

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchResult: []
        }
    }
    componentDidMount(){
        csv()
            .fromFile(toLocalStorage)
            .then(jsonObj=>{
                this.setState({
                    data: jsonObj
                });
            });
    }
    handleSearch(value){
        let result = this.state.data.filter(item=>{
            return RegExp(value).test(item.path);
        });
        this.setState({
            searchResult: result
        });
    }
    render(){
        return (
            <div style={{minHeight: '710px'}}>
                <h2>搜索内容</h2>
                <Search
                placeholder="搜索内容"
                onSearch={value=>this.handleSearch(value)}
                size="large"
                enterButton
                />
                {
                    this.state.searchResult.length > 0 && <List data={this.state.searchResult} title="搜索结果"/>
                }
            </div>
        )
    }
}

export default SearchComponent;