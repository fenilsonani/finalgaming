import React from 'react'

function Review() {
    return (
        <div className='w-full py-10'>
            <div className="container mx-auto px-4">
                <div className='flex justify-evenly flex-wrap'>
                    <div className='w-full md:w-[30%]'>
                        <img src="img/review_1.png" alt="" className='mx-auto' />
                    </div>
                    <div className='w-full md:w-[70%]'>
                        <div className='flex justify-between flex-col md:flex-row items-center md:items-start gap-5 md:gap-0 pr-8 py-5'>
                            <div className='flex flex-col items-center'>
                                <h3>Steve Cabanillas</h3>
                                <p className='font-thin text-[#979797]'>Lenevo Group, UK</p>
                            </div>
                            <img src="img/lenovo_logo.png" alt=""/>
                        </div>
                        <h4 className='py-10 tracking-wide leading-8'><img src="img/Vector.png" alt="" className='inline-block mr-2'/>
                        Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla amsan, risus sem sollicitudin lacus, ut interdum Maecenas eget condimentum velit, sit amet
                        </h4>
                    </div>
                </div>
        <button type="button" className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#414141]  focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Know More</button>

            </div>
        </div>
    )
}

export default Review
