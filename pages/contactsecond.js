import React from "react";
import Cookies from "js-cookie";

const contactsecond = () => {
    return (
        <div>
            <div className='w-screen h-screen bg-hello'>
                <div className='opactiy-bg'>
                    <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
                        <div className='bgtarnpant rounded-lg py-5 px-8'>
                            <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
                            <p className='text-white mt-10 font-thin py-2'>Select one pill to reach destination
                                point</p>
                            <div className='flex mt-10'>
                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#FF0000] text-white focus:outline-none  rounded-lg   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    onClick={() => {
                                    localStorage.setItem("pageAllowed", "5")
                                    Cookies.set("pageAllowed", "5")
                                    window.location.href = "/contact"
                                }
                                }
                                    Red Pill
                                </button>

                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#000AFF] text-white focus:outline-none  rounded-lg  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={() => {
                                            localStorage.setItem("pageAllowed", "error")
                                            Cookies.set("pageAllowed", "error")
                                            window.location.href = "/contact"
                                        }}
                                >Start
                                    Blue Pill
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default contactsecond