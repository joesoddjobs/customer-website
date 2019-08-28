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
        }
        activeJobs {
          id
          jobType
          jobDescription
          status
          scheduledDateTime
        }
        completedJobs {
          id
          jobType
          jobDescription
          status
          scheduledDateTime
        }
      }
    }
  }
`

export default CURRENT_CUSTOMER
