import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class SearchComponent extends Component {
    handleSearch(){
        console.log("正在开发中，敬请期待！")
    }
    render(){
        return (
            <div style={{minHeight: '710px'}}>
                <h2>搜索内容</h2>
                <Search
                placeholder="搜索内容"
                onSearch={()=>this.handleSearch()}
                size="large"
                enterButton
                />
            </div>
        )
    }
}

export default SearchComponent;