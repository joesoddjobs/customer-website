import React from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import { Container, Wrapper, BodyWrapper, HeaderText } from './styles'
import { Table } from 'antd'
import CURRENT_CUSTOMER from './graphql'
import { Query } from 'react-apollo'
import moment from 'moment'

const columns = [
  {
    title: 'Scheduled Time',
    dataIndex: 'dateTime',
    key: 'dateTime'
  },
  {
    title: 'Job Type',
    dataIndex: 'jobType',
    key: 'jobType'
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: 'Action',
    key: 'info',
    render: job => (
      <span>
        <Link
          to={{
            pathname: 'job-details',
            state: {
              job
            }
          }}
        >
          View Info
        </Link>
      </span>
    )
  }
]

// const data = [
//   {
//     key: '1',
//     date: 'John Brown',
//     time: 32,
//     type: 'New York No. 1 Lake Park',
//     status: 'status'
//   },
//   {
//     key: '2',
//     date: 'Jim Green',
//     time: 42,
//     type: 'London No. 1 Lake Park',
//     status: 'status'
//   },
//   {
//     key: '3',
//     date: 'Joe Black',
//     time: 32,
//     type: 'Sidney No. 1 Lake Park',
//     status: 'status'
//   }
// ]

const Info = () => (
  <Container>
    <Header />
    <Query query={CURRENT_CUSTOMER}>
      {({ loading, data }) => {
        if (loading) return null
        if (data.currentCustomer.customer) {
          const { activeJobs, completedJobs } = data.currentCustomer.customer
          const formattedActive = activeJobs.map(job => {
            if (job.scheduledDateTime) {
              const duration = moment.duration(job.scheduledDateTime, 'seconds')
              const dateTime = moment(duration).format('llll')
              return { ...job, dateTime }
            }
            return { ...job, dateTime: 'Not Scheduled Yet!' }
          })
          const formattedCompleted = completedJobs.map(job => {
            if (job.scheduledDateTime) {
              const duration = moment.duration(job.scheduledDateTime, 'seconds')
              const dateTime = moment(duration).format('llll')
              return { ...job, dateTime }
            }
            return { ...job, dateTime: 'Not Scheduled Yet!' }
          })
          return (
            <BodyWrapper>
              <Wrapper>
                <HeaderText>Scheduled Jobs</HeaderText>
                <Table columns={columns} dataSource={formattedActive} />
                <HeaderText>Past Jobs</HeaderText>
                <Table columns={columns} dataSource={formattedCompleted} />
              </Wrapper>
            </BodyWrapper>
          )
        }
        return null
      }}
    </Query>
  </Container>
)

export default Info
