import React, {useEffect} from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

const contactsecond = () => {

    const router = useRouter()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (Cookies.get("pageAllowed") === "4") {
            // alert("welcome to company page")
            toast.success("Welcome to contact second page")
        } else {
            // window.location.href = "/"
            toast.error("You are not allowed to access this page")
            router.push("/")
        }
    }, [])

    return (
        <div>
            <div className='w-screen h-screen bg-hello'>
                <div className='opactiy-bg'>
                    <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
                        <div className='bgtarnpant rounded-lg py-5 px-8'>
                            <h3 className='text-white mx-auto text-center text-4xl font-bold'>
                                Hello, there
                            </h3>
                            <h3 className='text-white mx-auto text-center text-4xl font-bold'>
                                Last step to move forward.
                            </h3>
                            <p className='text-white mt-10 font-thin py-2 text-center'>Select one pill to reach
                                destination
                                point</p>
                            <div className='flex mt-10'>
                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#FF0000] text-white focus:outline-none  rounded-full   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={() => {
                                            Cookies.set("pageAllowed", "5")
                                            // window.location.href = "/contact"
                                            router.push("/contact")
                                        }}
                                >
                                    Red Pill
                                </button>

                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#000AFF] text-white focus:outline-none  rounded-full  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={() => {
                                            Cookies.set("pageAllowed", "error")
                                            // window.location.href = "/contact"
                                            router.push("/contact")
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