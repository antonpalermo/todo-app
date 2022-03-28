import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const Input = ({ ...props }: InputProps) => {
  const [field] = useField(props)

  return (
    <input
      {...field}
      {...props}
      className="text-sm font-medium text-gray-900 px-3 py-2 border border-gray-300 rounded-md w-full"
    />
  )
}

export default Input
