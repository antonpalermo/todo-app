import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'

const Home = () => {
  return <div>home</div>
}

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
