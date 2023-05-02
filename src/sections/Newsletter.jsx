import React from 'react'

const Newsletter = () => {
  return (
      <div className='container border border-gray-500 border-t-0 flex items-center justify-center'>
        <div className='min-h-custom flex items-center justify-center flex-col text-center'>
              <h2 className='text-5xl font-black'>Get notified when we’re launching.</h2>
              <p className='py-6'>Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.</p>

              <div className='flex'>
                  <input className='input input-bordered input-primary' placeholder='Enter your Email' type="text" />
                  <button className='btn btn-primary ml-4'>Notify Me</button>
              </div>
        </div>
    </div>
  )
}

export default Newsletter