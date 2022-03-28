import React, { FunctionComponent } from 'react'

const Label: FunctionComponent = ({ children }) => {
  return (
    <label className="text-sm font-semibold text-gray-600 tracking-wide">
      {children}
    </label>
  )
}

export default Label
