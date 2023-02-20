import { User } from './user'

export interface Chat {
  id: string
  members: User[]
  chanelId: string
}
