import React from 'react'
import { Container, HeaderText, BodyText, BookAJobButton } from './styles'

const Header = () => (
  <Container>
    <HeaderText>Testimonials</HeaderText>
    <BodyText>
      Joe&apos;s Odd Jobs strives to give you the best and easiest experience
      getting jobs done with percision and ease, but don&apos;t just take our
      word for it, see what our customers have to say.
    </BodyText>
    <BookAJobButton to="/">Write a Review</BookAJobButton>
  </Container>
)

export default Header
