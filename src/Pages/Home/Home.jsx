import React from 'react'
import BlogCards from '../../Components/BlogCards/BlogCards'
import Highlight from '../../Components/Highlight/Highlight'
import Carousel from '../../Components/Slider/Carousel'

const Home1 = () => {
  return (
    <div>
      <div className='px-[11rem]'>
      <BlogCards/>
      <Carousel/>
      <Highlight/>
      </div>
    </div>
  )
}

export default Home1