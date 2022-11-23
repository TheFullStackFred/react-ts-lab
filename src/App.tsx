import React from 'react'
import './App.css'
import UserComponent from './Components/UserComponent/UserComponent'
import { Role } from './Enums'

const App = () => {
  return (
    <div className='App'>
      <UserComponent userName={'Fred'} age={32} role={Role.admin} />
    </div>
  )
}

export default App
