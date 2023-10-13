import React from 'react'

function Season() {
    return (
        <div className='w-full bg-seasion'>
            <div className='opactiy-bg'>
                <div className="container mx-auto h-[500px] flex flex-col justify-end">
                    <img src="img/star.png" alt="star_image" className='mx-auto' />
                    <h2 className='text-white font-["Orbitron",sans-serif] text-center text-2xl md:text-4xl uppercase font-bold tracking-wider'>season four pass</h2>
                    <p className='text-[#f2f2f2] text-sm md:text-base text-center font-["Orbitron",sans-serif] py-2 leading-7'>Pass contains legendary guns. suits that includes hat, vest, guns, coolers skins are available. Reach <br></br>till 120th batch to avail this season four pass. Voucher for guns, and cloth skins. And vouchers for gems and diamonds if the gamer had luck</p>
                </div>
            </div>
        </div>
    )
}

export default Season
