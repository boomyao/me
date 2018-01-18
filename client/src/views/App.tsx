import React from 'react'
import Message from '../models/Message';

export default class App extends React.Component<{db: Message[]}> {
  render () {
    return (
      <div>{this.props.db[0].id}</div>
    )
  }
}