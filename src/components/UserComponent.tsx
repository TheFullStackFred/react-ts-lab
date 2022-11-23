import React from 'react'
import { IUserProps } from '../Interfaces'

const UserComponent = ({ userName, age, role }: IUserProps) => {
  return (
    <div>
      <h1>User Component</h1>
      <p>{userName}</p>
      <p>{age}</p>
      <p>{role}</p>
    </div>
  )
}

export default UserComponent
