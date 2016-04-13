const React = require('react')
const io = require('socket.io-client')
const Header = require('./parts/Header')

const App = React.createClass({
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  },
  connect () {
    alert(`conected ${this.socket.id}`)
  },
  render () {
    return (<div><Header title='Hello World'/></div>)
  }
})

module.exports = App
