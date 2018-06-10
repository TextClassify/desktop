import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }
    handleChangeIndex(i){
        this.setState({
            selectedIndex: i
        });
        this.props.changeIndexBubble && this.props.changeIndexBubble(i);
    }
    transferPath(_path){
        let arr =  _path.split("/");
        return arr[arr.length - 1];
     }
    render(){
        return (
            <div style={{padding: '0 20',borderRight: '1px solid #D3D3D3',maxHeight: '710px',overflow: 'scroll'}}>
                <h2 style={{borderBottom: '1px dotted gray', padding: 20}}>{this.props.title}</h2>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={(item,i) => (
                    <List.Item onClick={()=>this.handleChangeIndex(i)} style={{backgroundColor: i===this.state.selectedIndex?'#D3D3D3':'' }}>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<span>{this.transferPath(item.path)}</span>}
                        description={item.class}
                        />
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ListComponent;