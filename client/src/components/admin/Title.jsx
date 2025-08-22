import React from 'react'

function Title({text1,text2}) {
  return (
    <div>
      <h1 className='flex gap-1 text-white text-3xl font-medium'>{text1} <span className='underline text-primary'>{text2}</span></h1>
    </div>
  )
}

export default Title
