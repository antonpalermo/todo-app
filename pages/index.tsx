import { PrismaClient } from '@prisma/client'
import { FormikHelpers } from 'formik'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { ReactElement, useEffect, useState } from 'react'
import TaskForm from '../components/Form'
import Layout from '../components/Layout'
import { Task } from '../utils/task'

const Home = () => {
  const [taskList, setTaskList] = useState<Task[]>()

  const handleSubmit = async (val: Task, helpers: FormikHelpers<Task>) => {
    const request = await fetch('/api/core', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(val)
    })
    const task = await request.json()
    setTaskList((x: any) => [...x, task])
    helpers.resetForm()
    return task
  }

  useEffect(() => {
    const getTasks = async () => {
      const data = await (await fetch('/api/core', { method: 'GET' })).json()
      setTaskList(data)
    }
    getTasks()
  }, [])

  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
      {taskList?.map(task => (
        <div key={task?.id}>
          <h1>{task.task}</h1>
        </div>
      ))}
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
