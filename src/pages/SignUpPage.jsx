import React from 'react'

const SignUpPage = () => {
  return (
      <div className='container border border-gray-500 border-t-0 flex items-center justify-center'>
          <div className='min-h-screen flex flex-col w-full items-center justify-center'>

            <form>
                  <h2 className='text-5xl font-black mb-10 ml-20'>sign up,</h2>

                  <div className='flex'>

                      <div>
                          <div className='px-20 py-4 border border-gray-500'>
                              <label className="label p-0">
                                  <span className="font-bold text-gray-500">Name</span>
                              </label>
                              <input type="text" placeholder="John Clark" className="input w-full p-0 h-fit font-bold bg-transparent" />
                          </div>
                          <div className='px-20 py-4 border border-gray-500 border-t-0'>
                              <label className="label p-0">
                                  <span className="font-bold text-gray-500">Email</span>
                              </label>
                              <input type="text" placeholder="example@email.com" className="input w-full p-0 h-fit font-bold bg-transparent" />
                          </div>
                      </div>

                      <div className='w-80 px-14 flex items-center justify-start border border-gray-500 border-l-0'>
                          <div>
                              <h3 className='font-bold text-gray-500 text-lg'>Already have an <br />account?</h3>
                              <button className='link font-black text-primary text-lg'>login</button>
                          </div>
                      </div>
                  </div>

                  <div className='flex'>
                      <div>
                          <div className='px-20 py-4 border border-gray-500 border-t-0'>
                              <label className="label p-0">
                                  <span className="font-bold text-gray-500">Password</span>
                              </label>
                              <input type="password" placeholder="Password" className="input w-full p-0 h-fit font-bold bg-transparent" />
                          </div>
                          <div className='px-20 py-4 border border-gray-500 border-t-0'>
                              <label className="label p-0">
                                  <span className="font-bold text-gray-500">Confirm Password</span>
                              </label>
                              <input type="password" placeholder="Password" className="input w-full p-0 h-fit font-bold bg-transparent" />
                          </div>
                      </div>

                      <div className='w-80 px-14 flex items-center justify-center border border-gray-500 border-l-0 border-t-0'>
                          <div className='w-full'>
                              <button className='btn btn-primary w-full'>SignUp</button>
                          </div>
                      </div>
                  </div>
            </form>

            
          </div>
      </div>
  )
}

export default SignUpPage