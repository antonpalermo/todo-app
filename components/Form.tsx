import { Form, Formik, FormikBag, FormikHelpers } from 'formik'
import React from 'react'
import { Task } from '../utils/task'
import Button from './Button'
import Input from './Input'
import Label from './Label'

type TaskFormProps = {
  onSubmit: (values: Task, helpers: FormikHelpers<Task>) => void | Promise<Task>
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const initialData = {
    task: '',
    isComplete: false
  }

  return (
    <div>
      <Formik initialValues={initialData} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <div className="flex flex-col space-y-1">
              <Label>Task</Label>
              <div className="inline-flex space-x-3">
                <Input
                  name="task"
                  value={values.task}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Compose new task"
                />
                <Button type="submit">Create</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm
