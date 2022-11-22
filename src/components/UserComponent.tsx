import React, { useState } from 'react'
import { FC } from 'react'
import { UserProps, Role } from '../interfaces'

const UserComponent: FC<UserProps> = () => {
  const [users, setUsers] = useState('')

  const addUser = () => {
    const user: UserProps = {
      userName: users,
      age: 32,
      role: Role.admin
    }
    console.log(user)
  }
  return (
    <div>
      <h1>User Component</h1>

      <select name='' id=''>
        <option>Pick User</option>
        <option>{users}</option>
      </select>
      <input onChange={(e) => setUsers(e.target.value)} />
      <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default UserComponent
