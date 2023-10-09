import React from 'react'

function LastStep() {
  return (
    <div className='w-full bg-hello'>
    <div className='opactiy-bg'>
     <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
        <div className='bgtarnpant py-5 px-8'>
        <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
         <p className='text-white font-thin py-2'>Select one pill to reach destination point</p>
         <div className='flex'>

         <button type="button" className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#FF0000] text-white focus:outline-none  rounded-lg   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Now</button>
     <button type="button" className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#000AFF] text-white focus:outline-none  rounded-lg  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Now</button>
         </div>

        </div>
       
     </div>
         
     </div>
 </div>
  )
}

export default LastStep
