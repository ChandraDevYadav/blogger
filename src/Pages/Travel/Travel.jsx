import React from 'react'
import TravelHero from '../../Components/Travel/TravelHero'
import TravelPage from '../../Components/Travel/TravelPage'
import TravelRight from '../../Components/Travel/TravelRight'

const Travel = () => {
  return (
    <div className=''>
      <TravelHero />
      <div className='px-[11rem] py-[5rem]'>
      <div className='grid grid-cols-9 gap-8'>
        <div className='col-span-6'>
        <TravelPage />
        </div>
        <div className='col-span-3'>
          <TravelRight />
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Travel