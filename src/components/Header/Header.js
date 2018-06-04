import React, { Component } from 'react';
import { Input, Row, Col, Avatar } from 'antd';
import { Link } from 'react-router';
const Search = Input.Search;

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {

            }
        }
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={1}>
                        <Link to="/user"><Avatar icon="user" /></Link>
                    </Col>
                    <Col span={19}>
                        <h1 style={{color: 'white'}}>文本分类助手</h1>
                    </Col>
                    <Col span={4}>
                    <Search
                        placeholder="搜索内容"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;