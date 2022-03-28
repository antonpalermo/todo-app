import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { ReactElement } from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return <div className="text-red-600">home</div>
}

Home.parentLayout = (page: ReactElement) => <Layout title="Home">{page}</Layout>

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination:
          '/api/auth/signin?callbackUrl=' + encodeURIComponent(ctx.resolvedUrl)
      }
    }
  }

  return {
    props: {}
  }
}

export default Home
