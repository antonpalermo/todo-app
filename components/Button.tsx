import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white tracking-wide font-medium text-sm px-3 py-2 rounded-md"
    >
      {children}
    </button>
  )
}

export default Button
