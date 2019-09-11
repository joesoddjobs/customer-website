import React from 'react'
import { Container } from './styles'
import Header from './components/Header'
import BookAJobBlock from './components/BookAJobBlock'
import TestimonialBlock from './components/TestimonialBlock'
import TestimonialBlockWhite from './components/TestimonialBlockWhite'

const Info = () => (
  <Container>
    <Header />
    <TestimonialBlock
      text="Joe Rahaim and Parker Scott recently helped me move my daughter into an apartment in NYC.  I can't say enough about these kids. Initiative, punctual, courteous, professional, hard-working, conscientious, and intelligent are the initial superlatives that come to mind.  They arrived in time, got us packed up and moved into a fourth floor walk-up and assembled a bunch of IKEA furniture. My daughter's roommate showed up with truck load of stuff and no workers so they moved  her in too.  Their only question was 'How can I help?' As a recent empty nesters I will definitely be looking to Joe and his team for future projects."
      reviewer="Joe S"
      town="Ridgewood"
    />
    <TestimonialBlockWhite
      text="I am happy to recommend Joe's Odd Jobs Services to anyone in need of a responsible, reliable and affordable team to come and help you with projects.  Joe is extremely reliable and always gets back to me right away for any and all jobs, great and small.  He has mowed my lawn, painted my garage and in my neighborhood has been called upon do clean ups and odd jobs.
    He is reasonable and hard working and I would be happy to be a reference for Joe's Odd Jobs."
      reviewer="Carolyn"
      town="Wycoff"
    />
    <TestimonialBlock
      text="Joe and his crew have done a lot of work for us from mowing, planting, and removing brush, to setting up a playset for my son. They are always punctual, professional, and do a thorough job. I highly recommend this service!"
      reviewer="Elizabeth K"
      town="Ridgewood"
    />
    <TestimonialBlockWhite
      text="Joe and his crew are great, always available when ever I need something done. Joe is easy to work with and will not rest until the job is done to satisfaction. Would totally recommend for all around the house projects!"
      reviewer="Nina Z"
      town="Ridgewood"
    />
    <TestimonialBlock
      text="If anyone needs some flowers planted/yard work, I definitely recommend Joe Rahaim from Joe's Odd Jobs. He is a hardworking high school student who did some work for me today. I highly recommend!"
      reviewer="Niki C"
      town="Ridgewood"
    />
    <TestimonialBlockWhite
      text="Joe is really a, “Joe of all trades.” As first-time homeowners we have many different projects that require assistance and Joe is always there to help, anything from garden cleanup and mulching to painting projects. He is extremely reliable, honest, and eager to please. Definitely recommend."
      reviewer="Julie E"
      town="Ridgewood"
    />
    <TestimonialBlock
      text="Joe Rahaim has worked in my house and garden multiple times. He is a completely reliable, polite and hardworking young man. Nothing is ever too hard or difficult for him and he is a pleasure to deal with. I don't know what I would have done without his help while moving house."
      reviewer="Ester S"
      town="Ridgewood"
    />
    <BookAJobBlock />
  </Container>
)

export default Info
