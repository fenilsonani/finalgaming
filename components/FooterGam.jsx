import React from 'react'

function FooterGam() {
  return (
    <div className='w-full bg-[#010101] py-10'>
    <div className="container mx-auto px-4">
        <div className='flex justify-evenly flex-wrap'>
            <div className='w-full md:w-[25%]'>

                <img src="img/ftr-loog.png" alt="logo" className='mx-auto max-w-[100%]'/>
            </div>
                <div className='text-white  w-full md:w-[70%]'>
                    <div className='flex gap-20 py-2'>
                    <h3 className='font-["Orbitron",sans-serif] underline'>Cookie preferences</h3>
                    <h3 className='font-["Orbitron",sans-serif] underline'>Privacy policy</h3>
                    </div>
                    <p className='py-3 font-["Orbitron",sans-serif] text-sm font-thin'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. All rights reserved</p>
                </div>
        </div>
    </div>
</div>
  )
}

export default FooterGam
