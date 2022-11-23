import React from 'react'
import { IUserProps } from '../Interfaces'

const UserComponent = ({ userName, age, role }: IUserProps) => {
  return (
    <div>
      <h1>User Component</h1>
      {userName}
      {age}
      {role}
    </div>
  )
}

export default UserComponent
