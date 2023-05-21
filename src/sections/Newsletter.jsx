import React from 'react'

const Newsletter = () => {
  return (
      <div className='border border-gray-500 border-t-0 flex items-center justify-center'>
        <div className='min-h-custom flex items-center justify-center flex-col text-center'>
        <h2 className='text-5xl font-black'>Stay inspired with PlanBrainer.</h2>
        <p className='py-6 max-w-lg'>Stay in the loop with PlanBrainer's newsletter - your source for the latest trends, tips, and inspiration in interior design and floor planning..</p>

              <div className='flex'>
                  <input className='input input-bordered input-primary' placeholder='Enter your Email' type="text" />
                  <button className='btn btn-primary ml-4'>Subscribe!</button>
              </div>
        </div>
    </div>
  )
}

export default Newsletter