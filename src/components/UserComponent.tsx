import React from 'react'
import { FC } from 'react'
import { UserProps, Role } from '../interfaces'

const UserComponent: FC<UserProps> = ({ userName, age }) => {
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{age}</h1>
      <h1>{Role.admin}</h1>
      <h1>{Role.user}</h1>
    </div>
  )
}

export default UserComponent
