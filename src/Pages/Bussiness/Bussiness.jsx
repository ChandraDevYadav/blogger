import React from 'react'
import BussinessHero from '../../Components/Bussiness/BussinessHero'
import BusinessPage from '../../Components/Bussiness/BusinessPage'
import BussinessRight from '../../Components/Bussiness/BussinessRight'

const Bussiness = () => {
  return (
    <div className=''>
      <BussinessHero />
      <div className='px-[11rem] py-[5rem]'>
      <div className='grid grid-cols-9 gap-8'>
        <div className='col-span-6'>
        <BusinessPage />
        </div>
        <div className='col-span-3'>
          <BussinessRight />
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Bussiness