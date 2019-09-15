import gql from 'graphql-tag'

const CURRENT_CUSTOMER = gql`
  query currentCustomer {
    currentCustomer {
      customer {
        firstName
        lastName
        email
        phoneNumber
        address {
          street
        }
        jobs {
          id
        }
        recentJobs {
          id
          jobType
          jobDescription
          status
          scheduledDateTime
          address {
            state
            postalCode
            street
            city
          }
          contractors {
            firstName
            lastName
            phoneNumber
          }
        }
        activeJobs {
          id
          jobType
          jobDescription
          status
          scheduledDateTime
          address {
            state
            postalCode
            street
            city
          }
          contractors {
            firstName
            lastName
            phoneNumber
          }
        }
        completedJobs {
          id
          jobType
          jobDescription
          status
          scheduledDateTime
          address {
            state
            postalCode
            street
            city
          }
          contractors {
            firstName
            lastName
            phoneNumber
          }
        }
      }
    }
  }
`

export default CURRENT_CUSTOMER
