import gql from 'graphql-tag'

const CREATE_JOB = gql`
  mutation createNewJob($input: NewJobInput!) {
    createNewJob(input: $input) {
      job {
        id
        customerId
        estimatedTime
        contractors {
          id
        }
        jobType
        status
        jobDescription
        address {
          state
          city
          postalCode
          street
        }
      }
    }
  }
`

export default CREATE_JOB
