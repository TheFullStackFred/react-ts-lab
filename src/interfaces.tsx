export interface UserProps {
  userName: string
  age?: number
  role: Role
}

export enum Role {
  admin = 'Adam Agerling',
  user = 'Mehmet Achmed'
}
