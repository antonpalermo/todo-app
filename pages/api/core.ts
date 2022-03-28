import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise(async resolve => {
    const prisma = new PrismaClient()
    const method = req.method

    const session = await getSession({ req })

    if (!session) {
      return res.status(401).send({ message: 'unauthorized' })
    }

    switch (method) {
      case 'POST':
        const body = req.body
        const task = await prisma.task.create({ data: body })
        return res.status(200).send(task)
      case 'GET':
        const tasks = await prisma.task.findMany()
        return res.status(200).send(tasks)
    }
  })

export default handler
