import React from 'react'

function Upadategame() {
    return (
        <div className='w-full bg-update '>
            <div className='opactiy-bg py-5'>
                <div className="container mx-auto  py-10 px-2">
                    <h3 className='font-["Orbitron",sans-serif] text-white text-2xl font-bold'>NEW UPDATES</h3>
                    <p className='font-["Orbitron",sans-serif] text-white font-thin text-sm tracking-wide py-2 leading-6'>Newly
                        updated map with morel loots and increased the game rendering performance. Newly extended map
                        that gives <br></br>more excitement to gamers </p>

                    {/*<div className='flex justify-evenly flex-wrap'>*/}
                    {/*    <div className='w-[95%] md:w-[40%] bg-black px-2 md:px-3 py-5 mb-2'>*/}
                    {/*        <h3 className='font-["Orbitron",sans-serif] text-white text-[12px]'>September 20 - <span*/}
                    {/*            className='text-[#E29E35] text-[10px]'>Ongoing</span></h3>*/}
                    {/*        <h2 className='font-["Orbitron",sans-serif] text-white font-bold tracking-wide'>MAP*/}
                    {/*            ADJUSTMENTS</h2>*/}
                    {/*        <div className='flex gap-2 py-3'>*/}
                    {/*            <div className='w-[40%] flex'>*/}
                    {/*                <img src="img/review-img.png" alt="" className='self-center'/>*/}
                    {/*            </div>*/}


                    {/*            <div className='w-[60%]'>*/}
                    {/*                <p className='text-white text-sm font-["Orbitron",sans-serif] text-justify'>Newly*/}
                    {/*                    updated map with morel loots and increased the game rendering performance. Newly*/}
                    {/*                    extended map that gives more excitement to gamers </p>*/}
                    {/*                <h5 className='text-white font-["Orbitron",sans-serif] text-[12px]'>UPDATED ON PATCH*/}
                    {/*                    : <span className='!text-[#E29E35] '>07</span></h5>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className='w-[95%] md:w-[40%] bg-black px-2 md:px-3 py-5 mb-2'>*/}
                    {/*        <h3 className='font-["Orbitron",sans-serif] text-white text-[12px]'>September 20 - <span*/}
                    {/*            className='text-[#E29E35] text-[10px]'>Ongoing</span></h3>*/}
                    {/*        <h2 className='font-["Orbitron",sans-serif] text-white font-bold tracking-wide'>NEW*/}
                    {/*            WEAPON</h2>*/}
                    {/*        <div className='flex gap-2 py-3 justify-between'>*/}
                    {/*            <div className='self-center flex items-center justify-center bg-gun w-[40%]'>*/}
                    {/*                <img src="img/image 59.png" alt=""/>*/}
                    {/*            </div>*/}

                    {/*            <div className='w-[60%]'>*/}
                    {/*                <p className='text-white text-sm font-["Orbitron",sans-serif] text-justify'>Newly*/}
                    {/*                    updated map with morel loots and increased the game rendering performance. Newly*/}
                    {/*                    extended map that gives more excitement to gamers </p>*/}
                    {/*                <h5 className='text-white font-["Orbitron",sans-serif] text-[12px]'>UPDATED ON PATCH*/}
                    {/*                    : <span className='!text-[#E29E35] '>07</span></h5>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <img src={"/newupdate.svg"} alt="" className='w-full hidden md:block mt-5 mx-auto font-[Orbitron,sans-serif] text-white font-bold text-2xl'/>
                    <img src={"/updatemobile.svg"} alt="" className='w-3/4 block md:hidden mt-5 mx-auto font-[Orbitron,sans-serif] text-white font-bold text-2xl'/>
                </div>
            </div>
        </div>
    )
}

export default Upadategame
