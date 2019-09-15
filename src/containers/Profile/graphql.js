import gql from 'graphql-tag'

const CURRENT_CUSTOMER = gql`
  query currentCustomer {
    currentCustomer {
      customer {
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`

export default CURRENT_CUSTOMER
