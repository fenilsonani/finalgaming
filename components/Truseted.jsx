import React from 'react'

function Truseted() {
    return (
        <div className='w-fullbg-[#f2f2f2] py-10 '>
            <div className="container mx-auto">
                {/*<h2 className='text-center py-3 text-xl md:text-2xl font-bold'>60+ Trusted by Government Entites and  Steering Organiztions</h2>*/}
                <img src={"/60.svg"} className={"mx-auto mb-40 block md:hidden"} alt="60+"/>
                <img src={"/60sm.svg"} className={"mx-auto mb-40 hidden md:block"} alt="60+"/>
                <div className='flex justify-evenly bg-gray-100 py-5 w-full overflow-y-auto gap-10'>
                    <img src="img/turested/asana.png" alt="asanalogo"/>
                    <img src="img/turested/ghost.png" alt="ghostlogo"/>
                    <img src="img/turested/plaid.png" alt="plaidlogo"/>
                    <img src="img/turested/airwa.png" alt="airwalogo"/>
                    <img src="img/turested/framer.png" alt="framerlogo"/>
                    <img src="img/turested/pip.png" alt="piplogo"/>
                </div>
            </div>
        </div>
    )
}

export default Truseted
