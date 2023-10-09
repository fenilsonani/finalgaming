import React from 'react'

function About_Us() {
    return (
        <div className='w-full py-10'>
            <div className='container mx-auto px-2'>
                <div className='flex justify-evenly flex-wrap'>
                    <div className='w-full md:w-[40%]'>
                        <h5 className='text-[#A6A6A6] uppercase mb-2'>About us</h5>
                        <p className='text-[#414141]  font-normal text-xl md:text-4xl'>Providing Security rich Products
                            world wide</p>
                        <p className='py-3 md:py-5 font-thin'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et
                            velit interdum, ac aliquet odio mattis.</p>
                    </div>
                    <div className='w-full md:w-[40%]'>
                        <img src="img/about-us.png" alt="" className='mx-auto max-w-full h-auto'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_Us