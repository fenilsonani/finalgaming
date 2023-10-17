import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-gradient-to-rfrom-black via-black  to-gray-700 py-10'>
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-12'>
                    <div className='w-full col-span-3'>
                        <img src="img/ftr-loog.png" alt="logo" className='mx-auto pr-4'/>
                    </div>
                    <div className='text-white w-full col-span-9'>
                        <div className='flex gap-20 py-2'>
                            <h3 className='font-["Orbitron",sans-serif] text-[10px] md:text-base underline'>Cookie preferences</h3>
                            <h3 className='font-["Orbitron",sans-serif] text-[10px] md:text-base  underline'>Privacy policy</h3>
                        </div>
                        <p className='py-3 font-["Orbitron",sans-serif] text-[10px] md:text-base font-thin'>Jorem ipsum dolor sit amet,
                            consectetur adipiscing elit. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
