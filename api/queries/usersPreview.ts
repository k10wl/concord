export const queryUsersPreview = gql`
  query UsersPreview {
    users {
      id
      name
      avatar
      color
    }
  }
`
