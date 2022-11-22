import React from 'react'
import { FC } from 'react'
import { UserProps } from '../Interfaces'

export const UserComponent: FC<UserProps> = ({ userName, age, role }) => {
  return (
    <div>
      <h1>User Component</h1>
      {userName}
      {age}
      {role}
    </div>
  )
}
