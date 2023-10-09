import React from 'react'

function All_From() {
  return (
    <form>
    <div className ="flex gap-5 justify-center mb-5">
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg.Robart" required/>
     </div>
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg.Bosch" required/>
     </div>
    </div>
    <div className ="flex gap-5 justify-center mb-5">
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highest Qualification</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bachelor's" required/>
     </div>
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required/>
     </div>
    </div>
    <div className ="flex gap-5 justify-center mb-5">
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current location</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg.pune" required/>
     </div>
     <div className='w-[50%] md:w-[30%]'>
        <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone no.</label>
        <input type="email" id="email" className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 9363354254" required/>
     </div>
    </div>
    <div className='py-4'>

    <button type="button" className="py-1 block mx-auto  px-10 md:px-20 border-2 font-medium   focus:outline-none text-dark text-[20px]   border-black-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-[#414141]">Submit</button>


    </div>
  </form>
  )
}

export default All_From
