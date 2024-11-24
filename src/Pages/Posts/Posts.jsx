import React from 'react'
import PostsHero from '../../Components/Posts/PostsHero'
import PostsPage from '../../Components/Posts/PostsPage'
import PostsRight from '../../Components/Posts/PostsRight'

const Posts = () => {
  return (
    <div className=''>
      <PostsHero />
      <div className='px-[11rem] py-[5rem]'>
      <div className='grid grid-cols-9 gap-8'>
        <div className='col-span-6'>
        <PostsPage />
        </div>
        <div className='col-span-3'>
          <PostsRight />
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Posts