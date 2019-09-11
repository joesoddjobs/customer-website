import React from 'react'
import {
  Container,
  GraphicContainer,
  ListGraphic,
  ExplanationContainer,
  ExplanationHeader,
  ExplanationBody
} from './styles'

const OverviewBanner = () => {
  return (
    <Container>
      <GraphicContainer>
        <ListGraphic />
      </GraphicContainer>
      <ExplanationContainer>
        <ExplanationHeader>Understanding Our Process</ExplanationHeader>
        <ExplanationBody>
          A quick overview of how we operate and what you should expect as you
          book a job with Joe’s Odd Jobs
        </ExplanationBody>
      </ExplanationContainer>
    </Container>
  )
}

export default OverviewBanner
