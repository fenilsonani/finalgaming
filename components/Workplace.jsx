import React, { useState } from 'react'

function Workplace() {
    const [workingData, setWorking] = useState(
        [
        {
            img: "img/working_img/flexilable_hourse.png",
            titile: "Flexible Work hours",
            subHeding: "Flexible timing to work more efficiently with perfect shift timing",
        },
        {
            img: "img/working_img/health_benifits.png",
            titile: "Health insurance benefits",
            subHeding: "We providing health insurance to make our Employees more productive",
        },
        {
            img: "img/working_img/on_time_intvies.png",
            titile: "On time incentives",
            subHeding: "Performance based bonus in additional to the salary",
        },
        {
            img: "img/working_img/cab_facility.png",
            titile: "Cab facilities",
            subHeding: "Cab drop and pick up facilities available for Employees",
        }
        ]
    )
  return (
    <div className='w-full py-10'>
      <div className='container mx-auto'>
        <h2 className='text-center text-[#414141] font-bold text-2xl'>Making a awesome workplace working with us</h2>
        <p className='text-center font-thin'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
        <div className='flex flex-wrap justify-evenly py-5'>
                {
                  workingData.map( (data,index)=> {
                    return(
                        <div className='w-full md:w-[40%] mb-5' key={index}>
                          <img src={data.img} alt={data.img} className='mx-auto' />
                          <h3 className='text-center font-bold'>{data.titile}</h3>
                          <p className='text-center font-thin'>{data.subHeding}</p>
                          </div>
                  )
                  })
                }
        </div>
      </div>
    </div>
  )
}

export default Workplace
