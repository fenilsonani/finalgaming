import React from 'react'
import Shooters from './Shooters'
import Upadategame from './Upadategame'
import Season from './Season'
import Know from './Know'
import Footer from './Footer'
import FooterGam from './FooterGam'
import Hello from './Hello'
import LastStep from './LastStep'
import QuizOne from './QuizOne'
import Ouiztow from './Ouiztow'

function GamePage() {
  return (
    <>
    <div className='w-full bg-image'>
      <div className="container mx-auto ">
        <div className='flex py-5 justify-between'>
          <div className='flex gap-3'>
            <img src="img/logo512.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <h3 className="self-center tracking-[0.5rem]  text-sm font-semibold whitespace-nowrap text-white">CHIMERA</h3>
          </div>
          <div className='flex gap-4 items-center'>
            <img src="img/global.png" alt="global" />
            <h3 className='text-white text-sm'>ENGLISH (ASIA)</h3>
            <img src="img/drop-down.png" alt="dropdown" />
          </div>
        </div>
        <div className='h-[500px] flex flex-col justify-between items-start py-5'>
          <img src="img/lets-be.png" alt="text-banner" className='mx-auto max-w-[100%]' />
          <button className='text-white mx-auto text-xl  font-["Orbitron",sans-serif] bg-[#64646436] py-3 px-2 border-2 border-[#f2f2f2]'>Know More</button>
        </div>
      </div>
    </div>
    <Shooters/>
    <Upadategame/>
    <Know/>
    <Season/>
    <FooterGam/>
    <Hello/>
    <LastStep/>
    <QuizOne/>
    <Ouiztow/>
    </>
  )
}

export default GamePage
