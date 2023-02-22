import { faker } from '@faker-js/faker'
import fs from 'fs'

const DATA_LENGTH = 10

function generateChannels() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    avatar: faker.helpers.maybe(faker.internet.avatar, { probability: 0.7 }),
    color: faker.color.rgb(),
  }
}
const CHANNELS_MOCK = []
for (let i = 0; i < DATA_LENGTH; i++) {
  CHANNELS_MOCK.push(generateChannels())
}
fs.writeFileSync(
  'MOCKS/CHANNELS_MOCK.ts',
  `import { Channel } from '#graphql/resolver'

export const CHANNELS_MOCK: Channel[] = ${JSON.stringify(CHANNELS_MOCK, null, '\t')}
`,)

function generateUsers() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    avatar: faker.helpers.maybe(faker.internet.avatar, { probability: 0.7 }),
    color: faker.color.rgb(),
  }
}

function generateChats() {
  const USERS_MOCK = []
  for (let i = 0; i < DATA_LENGTH; i++) {
    USERS_MOCK.push(generateUsers())
  }
  return {
    id: faker.datatype.uuid(),
    users: USERS_MOCK,
    channelId: faker.datatype.uuid(),
  }
}
const CHATS_MOCK = []
for (let i = 0; i < DATA_LENGTH; i++) {
  CHATS_MOCK.push(generateChats())
}
fs.writeFileSync(
  'MOCKS/CHATS_MOCK.ts',
  `import { Chat } from '#graphql/resolver'

export const CHATS_MOCK: Chat[] = ${JSON.stringify(CHATS_MOCK, null, '\t')}
`,
)
