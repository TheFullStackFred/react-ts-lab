import React from 'react'
import './App.css'
import UserComponent from './components/UserComponent'
import { Role } from './interfaces'

function App() {
  return (
    <div className='App'>
      <UserComponent userName={'Fred'} age={32} role={Role.admin} />
    </div>
  )
}

export default App
