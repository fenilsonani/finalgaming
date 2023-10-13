import React from 'react'

function Shooters() {

    const [show, setShow] = React.useState(false)

    return (
        <div className='w-full py-10 bg-black'>
            <div className="container hidden md:block mx-auto">
                <img src="img/new_shooters.png" alt="new_shooters" className='mx-auto'/>
                <div className='flex justify-evenly items-center py-5'>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_7.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_6.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_5.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_1.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_2.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_3.png" alt=""/>
                    </div>
                    <div className='relative'>
                        <img src="img/box-img.png" className='absolute w-full h-full top-0 left-0 object-cover' alt=""/>
                        <img src="img/shooters_4.png" alt=""/>
                    </div>
                </div>
                {/* Only Image */}
                <div className='py-10'>
                    <img src="img/gamer_details.png" alt="" className='mx-auto max-w-[100%]'/>
                </div>
                {/* Only Image */}
            </div>
            <div className={"container mx-auto px-2 md:hidden"}>
                <img src="mobileshooter.svg" alt="new_shooters" className='mx-auto'/>
                <img src="name.svg" alt="new_shooters" className='mx-auto mt-10'
                     onClick={() => setShow(!show)}
                />
                {
                    show ? (
                            <img src={"/shooter3.svg"} alt={"error"} className={"mx-auto mt-10"}/>
                        )
                        :
                        (
                            <img src={"/shooter2.svg"} alt={"error"} className={"mx-auto mt-10"}/>
                        )
                }
            </div>
        </div>
    )
}

export default Shooters
