import React, { Component } from 'react'
import store from "../../redux/index";
/*
  redux测试按钮组件
*/
export default class button extends Component {

  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    console.log(store.getState());
    return (
      <div>
        {store.getState()}
        <div>123</div>
      </div>
    )
  }
}
