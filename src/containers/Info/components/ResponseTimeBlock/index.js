import React from 'react'
import { Container, Graphic, TextContainer, Header, Body } from './styles'

const ResponseTimeBlock = () => (
  <Container>
    <Graphic />
    <TextContainer>
      <Header>Quick Response Time</Header>
      <Body>
        Once you submit a job, you will recieve a confirmation email, you can
        make any necessary job changes in your account. Once we have found a
        crew of guys for your project, we will contact you to confirm
        everything.
      </Body>
    </TextContainer>
  </Container>
)

export default ResponseTimeBlock
