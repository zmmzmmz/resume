import React from 'react'
import Head from 'next/head'
import Profile from '../components/Profile'
import Studies from '../components/Studies'
import Works from '../components/Works'
import {ThemeProvider} from '../context/theme'

export default () => {
  return <ThemeProvider>
    <Head>
      <title>我的个人简历</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <div className={'home'}>
      <Profile />
      <main>
        <Studies />
        <Works />
      </main>
    </div>
  </ThemeProvider>
}
