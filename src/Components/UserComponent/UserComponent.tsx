import React from 'react'
import './UserComponent.css'
import { IUserProps } from '../../Interfaces'

const UserComponent = ({ userName, age, role }: IUserProps) => {
  return (
    <div id='user-component'>
      <h1>User Component</h1>
      <div className='input-container'>
        <input type='text' placeholder='Name...' />
        <input type='number' placeholder='Age...' />
        <input type='text' placeholder='Role...' />
        <button>Add User</button>
      </div>
      <div className='user-list'>
        <p>{userName}</p>
        <p>{age}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default UserComponent
