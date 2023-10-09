import React from 'react'

function Hello() {
  return (
    <div className='w-full bg-hello'>
       <div className='opactiy-bg'>
        <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
            <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
            <p className='text-white font-thin py-5'>Please answer the question to move forward</p>
        <button type="button" className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-white  focus:outline-none text-[#414141] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Now</button>

        </div>
            
        </div>
    </div>
  )
}

export default Hello
