import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-gradient-to-r from-[#0E0E0E] to-[#6D6D6D] py-10'>
            <div className="container mx-auto px-4">
                <div className='flex'>
                    <div className='w-full'>
                        <img src="img/ftr-loog.png" alt="logo" className='mx-auto max-w-[100%]'/>
                    </div>
                    <div className='text-white w-full'>
                        <div className='flex gap-20 py-2'>
                            <h3 className='font-["Orbitron",sans-serif] underline'>Cookie preferences</h3>
                            <h3 className='font-["Orbitron",sans-serif]  underline'>Privacy policy</h3>
                        </div>
                        <p className='py-3 font-["Orbitron",sans-serif] text-sm font-thin'>Jorem ipsum dolor sit amet,
                            consectetur adipiscing elit. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
