import React from 'react'
import { Container, HighlightedRoute, BookJobButton } from './styles'

const routeInfo = [
  { name: 'Home', path: '/' },
  { name: 'How it Works', path: '/info' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Profile', path: '/profile' },
  { name: 'Job Dashboard', path: '/job-dashboard' }
]

const Routes = routeInfo.map(route => (
  <HighlightedRoute key={route} to={route.path}>
    {route.name}
  </HighlightedRoute>
))

const RoutesRow = () => (
  <Container>
    {Routes}
    <BookJobButton to="/create-job">Book a Job</BookJobButton>
  </Container>
)

export default RoutesRow
