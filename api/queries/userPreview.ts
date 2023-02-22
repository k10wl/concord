export const queryUserPreview = gql`
  query UserPreview($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
      color
    }
  }
`
