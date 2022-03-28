import React from 'react'

import '@fontsource/inter'
import '../styles/globals.css'

import { SessionProvider } from 'next-auth/react'
import { PageLayoutProps } from '../utils/page-layout'

const App = ({
  Component,
  pageProps: { session, ...props }
}: PageLayoutProps) => {
  const getParentLayout = Component.parentLayout ?? (page => page)

  return (
    <SessionProvider session={session}>
      {getParentLayout(<Component {...props} />)}
    </SessionProvider>
  )
}

export default App
