import React from 'react'

function ErrorPage() {
  return (
    <div className='w-full '>
      <div className="conatiner mx-auto ">
        <h2 className='font-bold text-center text-4xl'>Ohh... that’s wrong</h2>
        <div className='h-[100vh] flex items-center justify-center'>
            <img src="img/Error_Img.png" className='mx-auto' alt="404Page" />
        </div>

      </div>
    </div>
  )
}

export default ErrorPage
