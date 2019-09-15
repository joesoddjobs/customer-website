import React from 'react'
import localStore from 'store'
import Header from './components/Header'
import CURRENT_CUSTOMER from './graphql'
import {
  Container,
  Wrapper,
  BodyWrapper,
  ButtonContainer,
  Spacer
} from './styles'
import { Descriptions, Button } from 'antd'
import { Query } from 'react-apollo'

const Info = ({ history }) => (
  <Container>
    <Header />
    <Query query={CURRENT_CUSTOMER}>
      {({ loading, data }) => {
        if (loading) return null
        return (
          <BodyWrapper>
            <Wrapper>
              <Descriptions bordered>
                <Descriptions.Item label="First Name" span={3}>
                  {data.currentCustomer.customer.firstName}
                </Descriptions.Item>
                <Descriptions.Item label="Last Name" span={3}>
                  {data.currentCustomer.customer.lastName}
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  {data.currentCustomer.customer.email}
                </Descriptions.Item>
                <Descriptions.Item label="Phone Number" span={3}>
                  {data.currentCustomer.customer.phoneNumber}
                </Descriptions.Item>
              </Descriptions>
              <ButtonContainer>
                <Spacer>
                  <Button
                    onClick={() => history.push({ pathname: '/edit-profile' })}
                    type="primary"
                    htmlType="submit"
                  >
                    Edit Profile
                  </Button>
                </Spacer>
                <Spacer>
                  <Button
                    onClick={async () => {
                      await localStore.remove('user')
                      history.push({ pathname: '/' })
                      window.location.reload()
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Sign Out
                  </Button>
                </Spacer>
              </ButtonContainer>
            </Wrapper>
          </BodyWrapper>
        )
      }}
    </Query>
  </Container>
)

export default Info
