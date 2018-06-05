import React, { Component } from 'react';

class About extends Component {
    render(){
        return (
            <div style={{textAlign: 'center',marginTop: 20,minHeight: '710px'}}>
                <h2>关于APP</h2>
                <p style={{fontSize: 18}}>
                    V1.0.0<br/>
                    developed by 杭电机器学习文本分类桌面开发组<br/>
                    powered by electron、React、Node.js<br/>

                </p>
            </div>
        )
    }
}

export default About;