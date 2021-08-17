import React, { Component } from 'react'
import './index.css'
import store from "../../redux/index";
export default class Pannel extends Component {
  constructor () {
    super()
    this.state = {
      hobby: [{name: '打代码', checked: false},
              {name:'打篮球',  checked: false} ,
              {name: '音乐', checked: false}],
      len: 0,
      allLen: 0        
    }
  }
  // 单个选中
  checked = (i) => {
    let that = this
    return function () {
      console.log(i);
      // i.checked = !i.checked
      that.state.hobby.forEach(item => {
        if (i.name === item.name) item.checked = !i.checked
      })
      that.state.len = that.state.hobby.filter(item => item.checked).length
      console.log(that.state.len);
      that.setState({
        hobby: that.state.hobby,
        len: that.state.len
      })
    }
  }
  // 全选
  checkeddAll = () => {
    // this.state.hobby.
    if (this.state.hobby.find(i => !i.checked)) {
      this.state.hobby.forEach(i => {
        i.checked = true
      })
      this.setState({
        len: this.state.hobby.length
      })
    } else {
      this.state.hobby.forEach(i => {
        i.checked = false
      })
      this.setState({
        len: 0
      })
    }
    console.log(this.state.hobby)
    this.setState({
      hobby: this.state.hobby 
    })
  }
  // 添加确定
  confirm = (event) => {
    let value = event.target.value
    if (event.key === 'Enter' && !this.state.hobby.find(i => i.name === value)) {
      let obj = {
        name: value,
        checked: false
      }
      this.state.hobby.unshift(obj)
      this.setState({

      })
    }
  }
  test = () => {
    store.dispatch({ type: 1, data: 2 })
  }
  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    let arr = []
    this.state.hobby.forEach(i => {
      arr.push(<div key={i.name}>
               <input type="checkbox" onChange={this.checked(i)} checked={i.checked}  name="hobby" id={i.name} /><label htmlFor={i.name}>{ i.name }</label>
               </div>)
    })
    return (
      <div>
        <div className="line"></div>

        <div className="content">
          <input onKeyDown= {this.confirm} className='input' type="text" placeholder='输入您的爱好'/>
          <div className="hobby-choose">
            {arr}
          </div>  
          <div className="all">
            <input checked={!this.state.hobby.find(i => !i.checked)} onChange={this.checkeddAll} type="checkbox" name="all" id="all" /><label htmlFor="all">全选</label>
            已选{this.state.len}/全部{this.state.hobby.length}
          </div>
        </div>
        pannel
        <div>结果: { store.getState() }</div>
        <button onClick={this.test} className='test'> 测试</button>
        <div className="trangle"></div>
      </div>
    )
  }
}
