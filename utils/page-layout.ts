import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

type PageLayout = NextPage & {
  parentLayout?: (page: ReactElement) => ReactNode
}

export type PageLayoutProps = AppProps & {
  Component: PageLayout
}
