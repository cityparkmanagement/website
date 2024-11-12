import React from 'react'
import Hero from '../../components/Hero/Hero'
import "./Index.scss"
import Features from '../../components/Features/Features'
import Aim from '../../components/Aim/Aim'

const index = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Aim />
    </main>
  )
}

export default index