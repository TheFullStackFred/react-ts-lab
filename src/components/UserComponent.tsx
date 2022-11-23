import React from 'react'

import { UserProps } from '../Interfaces'

const UserComponent = ({ userName, age, role }: UserProps) => {
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
