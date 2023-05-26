import React from 'react'

const ComponentTitle = ({data}) => {
    let {title ,subtitle} = data
  return (
    <div className='py-2'>
        <h1 className='text-4xl font-bold h-title text-[#0c7cc6]'>{title}</h1>
        <h1 className='text-xl font-bold h-title text-blue-800'>{subtitle}</h1>
    </div>
  )
}

export default ComponentTitle