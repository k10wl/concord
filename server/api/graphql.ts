import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { Resolvers, Chat, Channel } from '#graphql/resolver'
import { schema } from '#graphql/schema'
import { CHANNELS_MOCK, CHATS_MOCK } from '~/MOCKS'

const resolvers: Resolvers = {
  Query: {
    chats: (_, { ids }): Chat[] => {
      return CHATS_MOCK.filter(({ id }) => ids.includes(id))
    },
    channels: (_, { ids }): Channel[] => {
      return CHANNELS_MOCK.filter(({ id }) => ids.includes(id))
    },
  },
}

const apollo = new ApolloServer({ typeDefs: schema, resolvers })

export default startServerAndCreateH3Handler(apollo)
