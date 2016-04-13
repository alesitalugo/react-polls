import React from 'react'
import { Link } from 'react-router'

class NotFound extends React.Component {
  render () {
    return (
      <div id='not-found'>
        <h3>You can´t always get what you want</h3>
        <Link to='/'>Join as Audience</Link>
        <Link to='/speaker'>Start presentation as Speaker</Link>
        <Link to='/board'>View Board</Link>
      </div>
    )
  }
}
export default NotFound
