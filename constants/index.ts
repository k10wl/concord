import { Chanel, Chat } from '~~/types'

export const currentUserId = 'user1'

export const CHAT_MOCK: Chat[] = [
  {
    id: '1',
    members: [
      {
        id: 'user1',
        name: 'User 1',
        avatar: 'https://picsum.photos/id/235/200/200',
      },
      {
        id: 'user2',
        name: 'User 2',
        avatar: 'https://picsum.photos/id/234/200/200',
      },
    ],
    chanelId: 'me',
  },
  {
    id: '2',
    members: [
      {
        id: 'user3',
        name: 'User 3',
      },
      {
        id: 'user1',
        name: 'User 1',
        avatar: 'https://picsum.photos/id/234/200/200',
      },
    ],
    chanelId: 'me',
  },
]

export const CHANELS_MOCK: Chanel[] = [
  { id: '1', name: 'one!', img: 'https://picsum.photos/id/235/200/200' },
  { id: '2', name: 'T Wo!', img: 'https://picsum.photos/id/234/200/200' },
  { id: '3', name: 'thr33' },
  { id: '4', name: 'f0uR!', img: 'https://picsum.photos/id/233/200/200' },
  { id: '5', name: 'f1v3 5' },
]
