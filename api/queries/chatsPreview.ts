export const queryChatsPreview = gql`
  query ChatsPreview($ids: [ID]!) {
    chats(ids: $ids) {
      id
      channelId
      users {
        id
        name
        color
        avatar
      }
    }
  }
`
