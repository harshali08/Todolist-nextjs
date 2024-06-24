import ToDoList from '@/components/ToDoList'
import Todocomp from '@/components/Todocomp'

import React from 'react'

const page = () => {
  return (
    <div className='py-5'>
      <h1 className='text-center text-4xl font-sans	font-bold	py-4'>TO DO APP</h1>
      <Todocomp/>
      <ToDoList/>
   </div>
  )
}

export default page
