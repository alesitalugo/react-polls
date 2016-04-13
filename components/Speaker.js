import React from 'react'

class Speaker extends React.Component {
  render () {
    return (
      <div>
        <h1>Speaker: {this.props.state.status} </h1>
      </div>
    )
  }
}
Speaker.propTypes = {
  state: React.PropTypes.object
}
export default Speaker
