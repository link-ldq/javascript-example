import React from 'react'
import ReactDOM from 'react-dom'
import './index1.css'
import './index2.less'
import logo from './images/1.jpg'
class Rc extends React.Component{
  render() {
    return (
      <div>
        <div>hello react</div>
        <img src={logo} />
      </div>
    )
  }
}
ReactDOM.render(
  <Rc />,
  document.getElementById('root')
)