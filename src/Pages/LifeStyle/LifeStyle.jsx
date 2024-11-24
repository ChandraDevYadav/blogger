import React from 'react'
import LifeStyleHero from '../../Components/LifeStyle/LifeStyleHero'
import LifestylePage from '../../Components/LifeStyle/LifestylePage'
import SponsoredNews from '../../Components/Highlight/Components/SponsoredNews'
import HighLightRight from '../../Components/Highlight/Components/HighLightRight'
import Subscription from '../../Components/Highlight/Components/Subscription'
import LifeStyleRight from '../../Components/LifeStyle/LifeStyleRight'

const LifeStyle = () => {
  return (
    <div className=''>
      <LifeStyleHero />
      <div className='px-[11rem] py-[5rem]'>
      <div className='grid grid-cols-9 gap-8'>
        <div className='col-span-6'>
        <LifestylePage />
        </div>
        <div className='col-span-3'>
          <LifeStyleRight />
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default LifeStyle