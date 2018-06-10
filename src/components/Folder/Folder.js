import React, { Component } from 'react';
import { Icon, List, Card } from 'antd';
import { Link } from 'react-router';

const fs = require('fs');
const csv = require('csvtojson');

const { toLocalStorage, toLocalStorageContent } = require('../../config');

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            classes: []
        }
    }
    componentDidMount(){
        csv()
            .fromFile(toLocalStorage)
            .then(jsonObj=>{
                this.setState({
                    classes: this.getClasses(jsonObj)
                });
            });
    }
    getClasses(sourceData){
        let allClasses =  sourceData.map(item=>item.class);
        let countedClasses = {}

        allClasses.forEach(item => {
            if(item in countedClasses){
                countedClasses[item] = countedClasses[item]+1;
                return;
            }
            countedClasses[item] = 1;
        });

        return Object.entries(countedClasses).map(entry=>({
            class: entry[0],
            num: entry[1]
        }));
    }
    render(){
        return (
            <div style={{minHeight: '710px', padding: '20px'}}>
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                    dataSource={this.state.classes}
                    renderItem={item => (
                        <List.Item>
                            <Link to={"/home/"+item.class}><Card title={item.class}>{item.num}</Card></Link>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Folder;