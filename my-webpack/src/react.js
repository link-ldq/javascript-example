import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.less'
class Rc extends React.Component{
  render() {
    return <div>hello react</div>
  }
}
ReactDOM.render(
  <Rc />,
  document.getElementById('root')
)