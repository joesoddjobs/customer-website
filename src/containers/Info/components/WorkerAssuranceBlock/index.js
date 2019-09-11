import React from 'react'
import { Container, Graphic, TextContainer, Header, Body } from './styles'

const WorkerAssuranceBlock = () => {
  return (
    <Container>
      <Graphic />
      <TextContainer>
        <Header>Curated Workers</Header>
        <Body>
          Before the job has even been scheduled, we hand select the best and
          brighest high school and college students to join our team.
        </Body>
      </TextContainer>
    </Container>
  )
}

export default WorkerAssuranceBlock
