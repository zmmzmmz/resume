import React from 'react'
import Head from 'next/head'
import Profile from '../components/Profile'
import Studies from '../components/Studies'
import Works from '../components/Works'
import Personal from '../components/Personal'
import {ThemeProvider} from '../context/theme'

const Home = ({profile}) => {
  return <ThemeProvider>
    <Head>
      <title>我的个人简历</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <div className={'page'}>
      <Profile />
      <main>
        <Works works={profile.works} />
        <Studies educations={profile.educations} />
        <Personal works={profile.personalWorks} />
      </main>
    </div>
  </ThemeProvider>
}

Home.getInitialProps = async ctx => {
  const profile = require('../profile')
  console.log(profile)
  return {profile}
}


export default Home
