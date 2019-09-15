/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from './components/Header'
import { Container, Wrapper, BodyWrapper, HeaderText } from './styles'
import { Table, Tabs, Descriptions } from 'antd'

const { TabPane } = Tabs

const workerColumns = [
  {
    title: 'Worker',
    dataIndex: 'worker',
    key: 'worker',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone'
  }
]

function callback(key) {
  // eslint-disable-next-line no-console
  console.log(key)
}

const Info = ({ location }) => {
  const { job } = location.state
  const workerData = job.contractors.map((contractor, index) => ({
    key: index,
    worker: contractor.firstName,
    phone: contractor.phoneNumber
  }))
  const { city, state, postalCode, street } = job.address
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <Wrapper>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Job Details" key="1">
              <HeaderText>Details</HeaderText>
              <Descriptions>
                <Descriptions.Item label="Type">
                  {job.jobType}
                </Descriptions.Item>
                <Descriptions.Item label="Date">
                  {job.dateTime}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  {job.status}
                </Descriptions.Item>
                <Descriptions.Item label="Description">
                  {job.jobDescription}
                </Descriptions.Item>
                <Descriptions.Item label="Address">
                  {`${city}, ${state}, ${street}, ${postalCode}`}
                </Descriptions.Item>
              </Descriptions>
            </TabPane>
            <TabPane tab="Worker Details" key="2">
              <HeaderText>Workers</HeaderText>
              <Table columns={workerColumns} dataSource={workerData} />
            </TabPane>
          </Tabs>
        </Wrapper>
      </BodyWrapper>
    </Container>
  )
}

export default Info
