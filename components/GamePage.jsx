import React from 'react'
import Shooters from './Shooters'
import Upadategame from './Upadategame'
import Season from './Season'
import Know from './Know'
import FooterGam from './FooterGam'
import Hello from './Hello'
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

function GamePage() {

    const question1 = () => {
        return (
            <>
                <div className='bg-white flex justify-evenly'>
                    <div className='w-[3%] py-4'>
                        <p>3.</p>
                    </div>
                    <div className='w-[68%] py-4'>
                        <h3>Who invented the first electronic computer, and in what year was it invented?</h3>
                        {/* Chack radio */}

                        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                                <div className="flex items-center pl-3">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio"/>
                                    <label htmlFor="list-radio-license"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Johnson
                                        Huges at 1923-32 </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                                <div className="flex items-center pl-3">
                                    <input id="list-radio-id" type="radio" value="" name="list-radio"/>
                                    <label htmlFor="list-radio-id"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">John
                                        Vincent Atanasoff at 1937–42.</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="list-radio-millitary" type="radio" value="" name="list-radio"/>
                                    <label htmlFor="list-radio-millitary"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Robert
                                        Brown at 1954-34</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="list-radio-passport" type="radio" value="" name="list-radio"/>
                                    <label htmlFor="list-radio-passport"
                                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Charles
                                        Babbage at 1932 - 23</label>
                                </div>
                            </li>
                        </ul>

                        {/* end */}
                        <div className='flex justify-between py-3'>

                            <button type="button"
                                    className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Prev
                            </button>
                            <button type="button"
                                    className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Next
                            </button>
                        </div>
                    </div>

                    <div className='w-[25%] border-l-2   flex flex-col justify-between py-4'>
                        <div className='text-center'>
                            <h3 className='text-4xl font-bold'>3 <span className='text-xl'>/</span><span
                                className='text-[20px]'>5</span></h3>
                            <p>3 answerd</p>
                            <p>5 not answerd</p>

                        </div>
                        <div className='text-center'>
                            <button type="button"
                                    className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit
                            </button>

                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='w-full bg-image'>
                <div className="container mx-auto ">
                    <div className='flex py-5 justify-between'>
                        <div className='flex gap-3'>
                            <img src="img/logo512.png" className="h-8 mr-3" alt="Flowbite Logo"/>
                            <h3 className="self-center tracking-[0.5rem]  text-sm font-semibold whitespace-nowrap text-white">CHIMERA</h3>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src="img/global.png" alt="global"/>
                            <h3 className='text-white text-sm'>ENGLISH (ASIA)</h3>
                            <img src="img/drop-down.png" alt="dropdown"/>
                        </div>
                    </div>
                    <div className='h-[500px] flex flex-col justify-between items-start py-5'>
                        <img src="img/lets-be.png" alt="text-banner" className='mx-auto max-w-[100%]'/>
                        <button
                            className='text-white mx-auto text-xl  font-["Orbitron",sans-serif] bg-[#64646436] py-3 px-2 border-2 border-[#f2f2f2]'>Know
                            More
                        </button>
                    </div>
                </div>
            </div>
            <Shooters/>
            <Upadategame/>
            <Know/>
            <Season/>
            <FooterGam/>
            <Hello/>
            <div className='w-full bg-hello'>
                <div className='opactiy-bg'>
                    <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
                        <div className='bgtarnpant py-5 px-8'>
                            <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
                            <p className='text-white font-thin py-2'>Select one pill to reach destination point</p>
                            <div className='flex'>
                                <Dialog>
                                    <DialogTrigger>
                                        <button type="button"
                                                className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#FF0000] text-white focus:outline-none  rounded-lg   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            Start
                                            Now
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        {
                                            question1()
                                        }
                                    </DialogContent>
                                </Dialog>
                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#000AFF] text-white focus:outline-none  rounded-lg  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start
                                    Now
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/*<div className='w-full bg-hello'>*/}
            {/*    <div className='opactiy-bg'>*/}
            {/*        <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">*/}

            {/*            <div className='bg-white flex justify-evenly'>*/}
            {/*                <div className='w-[3%] py-4'>*/}
            {/*                    <p>3.</p>*/}
            {/*                </div>*/}
            {/*                <div className='w-[68%] py-4'>*/}
            {/*                    <h3>Who invented the first electronic computer, and in what year was it invented?</h3>*/}
            {/*                    /!* Chack radio *!/*/}

            {/*                    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-license" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-license"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Johnson*/}
            {/*                                    Huges at 1923-32 </label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-id" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-id"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">John*/}
            {/*                                    Vincent Atanasoff at 1937–42.</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-millitary" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-millitary"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Robert*/}
            {/*                                    Brown at 1954-34</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-passport" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-passport"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Charles*/}
            {/*                                    Babbage at 1932 - 23</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}

            {/*                    /!* end *!/*/}
            {/*                    <div className='flex justify-between py-3'>*/}

            {/*                        <button type="button"*/}
            {/*                                className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Prev*/}
            {/*                        </button>*/}
            {/*                        <button type="button"*/}
            {/*                                className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Next*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className='w-[25%] border-l-2   flex flex-col justify-between py-4'>*/}
            {/*                    <div className='text-center'>*/}
            {/*                        <h3 className='text-4xl font-bold'>3 <span className='text-xl'>/</span><span*/}
            {/*                            className='text-[20px]'>5</span></h3>*/}
            {/*                        <p>3 answerd</p>*/}
            {/*                        <p>5 not answerd</p>*/}
            {/*                    </div>*/}
            {/*                    <div className='text-center'>*/}
            {/*                        <button type="button"*/}
            {/*                                className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default GamePage
