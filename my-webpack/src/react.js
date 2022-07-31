import React from 'react'
import ReactDOM from 'react-dom'

class Rc extends React.Component{
  render() {
    return <div>hello react</div>
  }
}
ReactDOM.render(
  <Rc />,
  document.getElementById('root')
)