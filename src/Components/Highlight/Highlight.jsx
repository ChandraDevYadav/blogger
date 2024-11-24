import React from 'react'
import TodayHighlight from './Components/HighLightLeft'
import HighLightRight from './Components/HighLightRight'
import SponsoredNews from './Components/SponsoredNews'
import Subscription from './Components/Subscription'

const Highlight = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 text-[#444444]">Today's Top Highlights</h2>
      <div className="flex justify-start items-start gap-3 mb-8">
        <div className="w-28 h-[5px] rounded-full bg-[#0d6efd]"></div>
        <div className="w-8 h-[5px] rounded-full bg-[#0d6efd]"></div>
      </div>
        <div className='grid grid-cols-9 gap-8'>
            <div className='col-span-6'>
                <TodayHighlight/>
            </div>
            <div className='col-span-3'>
                <HighLightRight/>
            </div>
            <div className='col-span-9'>
                <SponsoredNews/>
            </div>
            <div className='col-span-9'>
                <Subscription/>
            </div>
        </div>
    </div>
  )
}

export default Highlight