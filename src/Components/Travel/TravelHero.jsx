import React from 'react'
import { Link } from 'react-router-dom'

const TravelHero = () => {
    return (
        <div className="relative h-96 flex flex-col items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/bbg.jpg')" }}>
      <div className="absolute inset-0 bg-gray-600 opacity-40"></div> {/* Dark overlay */}
      <h1 className="relative text-white text-2xl md:text-5xl font-semibold z-10">
      Travel
      </h1>
      <div className='flex justify-center items-center text-lg mt-4 z-30'>
          <Link to='/' className='text-white font-medium'>Home &nbsp;/</Link>
          <p className='text-blue-200 font-medium'>&nbsp; Travel</p>
        </div>
    </div>

    )
}

export default TravelHero