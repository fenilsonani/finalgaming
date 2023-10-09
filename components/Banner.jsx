import React from 'react'

function Banner() {
    return (
        <div className='w-full bg-main-baner'>
            <div className='opactiy-bg-dark'>
            <div className='container  mx-auto'>
                <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center">
                            <img src="/img/logo512.png" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center tracking-[0.5rem]  text-sm font-semibold whitespace-nowrap text-white">CHIMERA</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
                            onClick={() => {
                                document.getElementById('navbar-default').classList.toggle('hidden')
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                 <a className="cool-link text-white" href="#">Home</a>
                                </li>
                                <li>
                                 <a className="cool-link-non text-white" href="#">About</a>
                                </li>
                                <li>
                                 <a className="cool-link-non text-white" href="#">Service</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Slider Content Start */}
                <div className='h-[400px] flex flex-col justify-center items-center gap-4 max-w-[60%] mx-auto'>
                    <h2 className='text-white text-4xl text-center'>World-standard products without compromising security</h2>
                    <p className='text-white font-thin'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,</p>
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Know More</button>
                </div>
                {/* End Slider Content */}
            </div>
        </div>
        </div>
    )
}

export default Banner
