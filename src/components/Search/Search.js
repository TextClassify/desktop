/*create by wenhaoran on May 26th*/
import React, { Component } from 'react';
import { Input } from 'antd';
const Searcha = Input.Search;


class Search extends React.Component {


render(){
  return(
    <div>
      <Searcha
      style={{
            marginLeft:50,
            marginTop:50,
            width: 500 }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    </div>
  )
}
}


export default Search;
