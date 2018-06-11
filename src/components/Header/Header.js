import React, { Component } from 'react';
import { Input, Row, Col, Avatar } from 'antd';
import { Link, browserHistory } from 'react-router';
const Search = Input.Search;

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: this.props.userInfo
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userInfo.name !== this.props.userInfo.name){
            this.setState({
                userInfo: nextProps.userInfo
            });
        }
    }
    getAvatar(name){
        return name ? name[0].toUpperCase() : '无'
    }
    handleSearch(value){
        browserHistory.push('/search/'+value);
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={1}>
                        <Link to="/user">
                            <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size='large'>
                                {this.getAvatar(this.state.userInfo.name)}
                            </Avatar>
                        </Link>
                    </Col>
                    <Col span={19}>
                        <h1 style={{color: 'white'}}>文本分类助手</h1>
                    </Col>
                    <Col span={4}>
                    <Search
                        placeholder="搜索内容"
                        onSearch={value => this.handleSearch(value)}
                        style={{ width: 200 }}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;