import React, { FC } from 'react'
import './App.css'
import { UserComponent } from './components/UserComponent'
import { Role } from './Enums'

export const App: FC = () => {
  return (
    <div className='App'>
      <UserComponent userName={'Fred'} age={32} role={Role.user} />
    </div>
  )
}
