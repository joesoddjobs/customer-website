import React from 'react'
import { Container, HighlightedRoute, BookJobButton } from './styles'

const routeInfo = [
  { name: 'Home', path: '/' },
  { name: 'How it Works', path: '/info' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Job Dashboard', path: '/dashboard' }
]

const Routes = routeInfo.map(route => (
  <HighlightedRoute key={route} to={route.path}>
    {route.name}
  </HighlightedRoute>
))

const RoutesRow = () => {
  return (
    <Container>
      {Routes}
      <BookJobButton to="/sign-in">Sign In</BookJobButton>
    </Container>
  )
}

export default RoutesRow
