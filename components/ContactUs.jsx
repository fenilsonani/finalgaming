import React from 'react'
import BannerTop from './BannerTop'

function ContactUs() {
    return (
        <>
            <BannerTop/>
            <div className='w-full py-10 bg-["img/contact_us_from.png"] bg-no-repeat bg-right-bottom bg-contain'>
                <div className="container mx-auto px-2">
                    {/*<All_From />*/}
                    <div className='grid grid-cols-1 px-10 md:grid-cols-2 gap-5 md:gap-10 z-50'>
                        <div className={``}>
                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="name" id="name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>

                        <div className={``}>
                            <label htmlFor="qualification"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Highest Qualification
                            </label>
                            <input type="qualification" id="qualification"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Bachlors" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="location"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input type="location" id="location"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="last_name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                Name</label>
                            <input type="last_name" id="last_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Bosch" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.example@gmail.com" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="phone_no"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                No</label>
                            <input type="phone_no" id="phone_no"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>
                    </div>
                    <button type="button"
                            className={"border-black border-2 mx-10 py-2 px-10 rounded mt-5"}
                    >Submit
                    </button>
                </div>
            </div>
            {/*<div className={"fixed bottom-0 right-0"}>*/}
            {/*          /!*set transparent and set behind them*!/*/}
            {/*          <img src="img/contact_us_from.png" alt="3D Image" className='shadow-xl bg-transparent -z-40'/>*/}
            {/*</div>*/}
        </>
    )
}

export default ContactUs
