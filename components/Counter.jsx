import React, { useState } from 'react'

function Counter() {
    const [counterData, setCounterData] = useState(
        [
            {
                title: "200+",
                subhading: "Potential world class Employees"
            },
            {
                title: "80+",
                subhading: "Trustable customer from various field"
            },
            {
                title: "40+",
                subhading: "Projects delivered at good Quality"
            }
        ]
    )
    return (
        <div className='w-full py-10'>
            <div className="conatiner mx-auto flex flex-wrap justify-center md:justify-evenly">
                {
                    counterData.map(
                        (data, index) => {
                            return (
                                <div key= {index} className='w-[60%] md:w-[28%] lg:w-[20%]  px-2 md:px-0 mb-5 md:mb-0'>
                                <div className='border-2 rounded-lg p-6'>
                                    <h3 className='text-2xl text-center mb-2'>{data.title}</h3>
                                    <p className='text-md font-thin text-center'>{data.subhading}</p>
                                </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Counter
