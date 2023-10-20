import React from 'react'
import Navbar from "@/components/Core/Navbar";
import Cookies from "js-cookie";

function Banner() {
    return (
        <div className='w-full bg-main-baner'>
            <div className='opactiy-bg-dark'>
                <div className='container  mx-auto'>
                    <Navbar/>
                    <div
                        className='h-[80vh] hidden md:flex flex-col justify-center items-center gap-4 max-w-[100%] md:max-w-[70%] mx-auto'>
                        <h2 className='text-white text-4xl md:text-6xl text-center'>World-standard products without
                            compromising
                            security</h2>
                        <p className='text-white font-thin md:text-lg md:px-32 text-center'>Sorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
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
                    <div className={"flex flex-col md:hidden gap-20 mt-20"}>
                        <h2 className='text-white text-4xl text-left'>World-standard products without
                            compromising
                            security</h2>
                        <p className='text-white font-thin text-2xl md:px-32 text-left'>Sorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum,</p>
                        <div className={"grid grid-cols-3 gap-10"}>
                            <div className={"flex flex-col items-center border-l-2"}>
                                <h1 className={"text-white text-3xl"}>200+</h1>
                                <p className={"text-white ml-5 text-base"}>
                                    Potential world class Employees
                                </p>
                            </div><div className={"flex flex-col items-center border-l-2"}>
                                <h1 className={"text-white text-3xl"}>40+</h1>
                                <p className={"text-white ml-5 text-base"}>
                                    Projects delivered at good Quality
                                </p>
                            </div>
                            <div className={"flex flex-col items-center border-l-2"}>
                                <h1 className={"text-white text-3xl"}>80+</h1>
                                <p className={"text-white ml-5 text-base"}>
                                    Trustable customer from various field
                                </p>
                            </div>
                        </div>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 w-60 mb-10 text-sm font-medium focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
