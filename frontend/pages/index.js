import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Utama from '../layouts/utama'

const Home = () => {
  return (
    <Utama>
      <Head>
        <title>Portfolio Muhammad Nurwibawanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </Utama>
  )
}

export default Home
