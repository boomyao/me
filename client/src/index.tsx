import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import Message from './models/Message'
import DB from './data.json'

const db = DB as Message[]

ReactDOM.render(
  <App db={db} />,
  document.getElementById('root') as HTMLElement
);
