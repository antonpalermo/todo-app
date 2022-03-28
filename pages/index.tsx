import { FormikHelpers } from 'formik'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { ReactElement } from 'react'
import TaskForm from '../components/Form'
import Layout from '../components/Layout'
import { Task } from '../utils/task'

const Home = () => {
  const handleSubmit = (val: Task, helpers: FormikHelpers<Task>) => {
    console.log(val)
  }

  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  )
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
