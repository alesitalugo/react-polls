import React from 'react'

class Board extends React.Component {
  render () {
    return (
      <div>
        <h1>Board: {this.props.state.status}</h1>
      </div>
    )
  }
}
Board.propTypes = {
  state: React.PropTypes.object
}
export default Board
