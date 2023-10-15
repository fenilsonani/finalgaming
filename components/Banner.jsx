import React from 'react'
import Navbar from "@/components/Core/Navbar";
import Cookies from "js-cookie";

function Banner() {
    return (
        <div className='w-full bg-main-baner'>
            <div className='opactiy-bg-dark'>
                <div className='container  mx-auto'>
                    <Navbar/>
                    <div className='h-[80vh] flex flex-col justify-center items-center gap-4 max-w-[60%] mx-auto'>
                        <h2 className='text-white text-4xl text-center'>World-standard products without compromising
                            security</h2>
                        <p className='text-white font-thin'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum,</p>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                onClick={() => {
                                    Cookies.set("pageAllowed", "3");
                                    localStorage.setItem("pageAllowed", "3");
                                    window.location.href = "/contactstart";
                                }}
                        >
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
