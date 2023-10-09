import React from 'react'

function Ouiztow() {
    return (
        <div className='w-full bg-hello'>
            <div className='opactiy-bg'>
                <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">

                    <div className='bg-white  flex justify-evenly min-h-[350px]'>
                        <div className='w-[3%] py-4'>
                            <p>3.</p>
                        </div>
                        <div className='w-[68%] py-4 flex flex-col justify-between'>
                            <div>
                                <h3>Who invented the first electronic computer, and in what year was it invented?</h3>
                                {/* Chack radio */}

                                <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                                        <div className="flex items-center pl-3">
                                            <input id="list-radio-license" type="radio" value="" name="list-radio" />
                                            <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Johnson Huges at 1923-32 </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* end */}
                            <div className='flex justify-between py-3'>
                            <button type="button" className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Prev</button>
                                <button type="button" className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Next</button>
                            </div>
                        </div>

                        <div className='w-[25%] border-l-2   flex flex-col justify-between py-4'>
                            <div className='text-center'>
                                <h3 className='text-4xl font-bold'>3 <span className='text-xl'>/</span><span className='text-[20px]'>5</span></h3>
                                <p>3 answerd</p>
                                <p>5 not answerd</p>

                            </div>
                            <div className='text-center'>
                                <button type="button" className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ouiztow
