import React from 'react'
import Join from './parts/Join'

class Audience extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h2>Audience: {this.props.title} </h2>
        { this.props.status === 'connected' ? <Join /> : null }
      </div>
    )
  }
}
Audience.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.string
}

export default Audience
