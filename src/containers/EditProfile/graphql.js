import gql from 'graphql-tag'

export const EDIT_CUSTOMER = gql`
  mutation editCustomer($input: EditCustomerInput!) {
    editCustomer(input: $input) {
      customer {
        id
      }
      error {
        message
      }
    }
  }
`

export const CURRENT_CUSTOMER = gql`
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
