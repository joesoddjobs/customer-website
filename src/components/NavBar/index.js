import React from 'react'
import { Container, JoesOddJobsLogo } from './styles'
import RoutesRow from './components/RoutesRow'

const NavBar = () => {
  return (
    <Container>
      <JoesOddJobsLogo />
      <RoutesRow />
    </Container>
  )
}

export default NavBar
