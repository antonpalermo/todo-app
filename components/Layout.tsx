import React, { FunctionComponent } from 'react'
import Head from 'next/head'

type LayoutProps = {
  title?: string
}

const LayoutContainer: FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="px-3">{children}</div>
    </div>
  )
}

const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutContainer>
        <div className="py-5">{children}</div>
      </LayoutContainer>
    </>
  )
}

export default Layout
