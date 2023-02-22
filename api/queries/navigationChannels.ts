export const queryNavigationChannels = gql`
  query NavigationChannels($ids: [ID]!) {
    channels(ids: $ids) {
      id
      name
      color
      avatar
    }
  }
`
