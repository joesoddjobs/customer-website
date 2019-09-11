import React from 'react'
import { Container, Body, Graphic } from './styles'

const Testimonial = ({ text, reviewer, town }) => (
  <Container>
    <Body>{text}</Body>
    <Graphic />
    <Body>
      {reviewer}, {town} Resident
    </Body>
  </Container>
)

export default Testimonial
