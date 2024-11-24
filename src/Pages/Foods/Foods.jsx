import React from 'react'
import FoodsHero from '../../Components/Foods/FoodsHero'
import FoodsPage from '../../Components/Foods/FoodsPage'
import FoodsRight from '../../Components/Foods/FoodsRight'

const Foods = () => {
  return (
    <div className=''>
      <FoodsHero />
      <div className='px-[11rem] py-[5rem]'>
      <div className='grid grid-cols-9 gap-8'>
        <div className='col-span-6'>
        <FoodsPage />
        </div>
        <div className='col-span-3'>
          <FoodsRight />
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Foods