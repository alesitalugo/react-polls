import React from 'react'
import ReactDOM from 'react-dom'

class Join extends React.Component {
  constructor () {
    super()
    this.join = this.join.bind(this)
  }
  join () {
    const memberName = ReactDOM.findDOMNode(this.refs.name).value
    alert(`joinmember: ${memberName}`)
  }

  render () {
    return (
      <form action='javascript:void(0)' onSubmit={this.join}>
        <label>Name: </label>
        <input ref='name' className='form-control' placeholder='Write your Name' />
        <button className='btn btn-primary'>JOIN</button>
      </form>
    )
  }
}

export default Join
