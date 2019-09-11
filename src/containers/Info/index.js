import React from 'react'
import { Container } from './styles'
import Header from './components/Header'
import OverviewBanner from './components/OverviewBanner'
import WorkerAssuranceBlock from './components/WorkerAssuranceBlock'
import SeemlessExperienceBlock from './components/SeemlessExperienceBlock'
import ResponseTimeBlock from './components/ResponseTimeBlock'
import ProjectBlock from './components/ProjectBlock'
import BookAJobBlock from './components/BookAJobBlock'

const Info = () => (
  <Container>
    <Header />
    <OverviewBanner />
    <WorkerAssuranceBlock />
    <SeemlessExperienceBlock />
    <ResponseTimeBlock />
    <ProjectBlock />
    <BookAJobBlock />
  </Container>
)

export default Info
