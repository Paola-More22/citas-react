import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center p-2 uppercase font-bold mb-2 rounded-md text-xs">
        {children}
    </div>
  )
}

export default Error