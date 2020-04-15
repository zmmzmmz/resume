import React from 'react'
import Head from '../components/Head'
import Studies from '../components/Studies'
import Works from '../components/Works'
import {ThemeProvider} from '../context/theme'
export default () => {
  return <ThemeProvider>
    <div className={'home'}>
      <Head />
      <main>
        <Studies />
        <Works />
      </main>
    </div>
  </ThemeProvider>
}
