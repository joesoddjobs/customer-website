import React from 'react'
import Header from './components/Header'
import Checkout from './components/Checkout'
import { Container, Wrapper, BodyWrapper } from './styles'

const Info = () => (
  <Container>
    <Header />
    <BodyWrapper>
      <Wrapper>
        <Checkout />
      </Wrapper>
    </BodyWrapper>
  </Container>
)

export default Info
