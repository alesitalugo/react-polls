const React = require('react')
const io = require('socket.io-client')

const App = React.createClass({
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  },
  connect () {
    alert(`conected ${this.socket.id}`)
  },
  render () {
    return (<h1>hello world from react </h1>)
  }
})

module.exports = App
