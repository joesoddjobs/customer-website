import React from 'react'
import {
  Container,
  HeaderText,
  BodyText,
  BookAJobButton,
  Image
} from './styles'

const Header = () => (
  <Container>
    <HeaderText>How It Works</HeaderText>
    <BodyText>
      Joe&apos;s Odd Jobs utilizes high school and college students to help
      customers fufill jobs they may not have time for, may not know how to do,
      or just don’t want to do at all
    </BodyText>
    <BookAJobButton to="/">Book a Job</BookAJobButton>
    <Image />
  </Container>
)

export default Header
