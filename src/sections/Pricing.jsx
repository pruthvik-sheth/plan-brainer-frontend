import React from 'react'

const Pricing = () => {
  return (
      <div id='Pricing' className='border border-gray-500 border-t-0 flex items-center justify-center py-20'>

          <div className='min-h-screen w-10/12 flex flex-col items-center justify-center'>
              <h1 className='text-5xl font-black'>Pay only for what you use.</h1>
              <p className='text-lg py-6 max-w-2xl text-center'>Generate floor plan layouts on demand with PlanBrainer's pay-per-use pricing. Pay only for the floor plan layouts you generate and never worry about subscription fees.</p>
              <div className='mt-10 flex justify-between w-full'>

                  <div className='max-w-sm border text-center border-gray-500 p-8 flex flex-col items-center justify-center rounded-sm'>
                      <h1 className='text-4xl font-black'>Basic</h1>
                      <p className='py-6'>Best option for personal use and for your next side projects.</p>
                      <h2 className='font-extrabold text-4xl'>29$ <span className='text-xl font-normal'>/layout</span></h2>
                      <ul className='font-bold py-8'>
                          <li className='mt-2'>Access to PlanBrainer's basic features</li>
                          <li className='mt-2'>Limited customization options</li>
                          <li className='mt-2'>Support for one floor plan layout</li>
                          <li className='mt-2'>Customer support</li>
                      </ul>
                      <button className='btn btn-primary w-full'>Get Started</button>
                  </div>

                  <div className='max-w-sm border text-center bg-primary border-gray-500 p-8 flex flex-col items-center justify-center rounded-sm'>
                      <h1 className='text-4xl font-black'>Pro</h1>
                      <p className='py-6'>Relevant for multiple users, extended & premium support.</p>
                      <h2 className='font-extrabold text-4xl'>49$ <span className='text-xl font-normal'>/layout</span></h2>
                      <ul className='font-bold py-8'>
                          <li className='mt-2'>All the features of Basic Plan</li>
                          <li className='mt-2'>Advanced customization options</li>
                          <li className='mt-2'>Support for up to 3 floor plan layouts</li>
                          <li className='mt-2'>Priority customer support</li>
                      </ul>
                      <button className='btn btn-accent w-full'>Get Started</button>
                  </div>

                  <div className='max-w-sm border text-center border-gray-500 p-8 flex flex-col items-center justify-center rounded-sm'>
                      <h1 className='text-4xl font-black'>Premium</h1>
                      <p className='py-6'>Relevant for multiple users, extended & premium support.</p>
                      <h2 className='font-extrabold text-4xl'>99$ <span className='text-xl font-normal'>/layout</span></h2>
                      <ul className='font-bold py-8'>
                          <li className='mt-2'>All the features of Pro Plan</li>
                          <li className='mt-2'>Access to exclusive features</li>
                          <li className='mt-2'>Support for up to 7 floor plan layouts</li>
                          <li className='mt-2'>Dedicated customer support</li>
                      </ul>
                      <button className='btn btn-primary w-full'>Get Started</button>
                  </div>
              </div>
          </div>


      </div>
  )
}

export default Pricing