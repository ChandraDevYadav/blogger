import React from 'react'
import { FaUser } from 'react-icons/fa'

const Subscription = () => {
    return (
        <div className='mt-6 mb-12'>
            <div
                className="w-full h-[22rem] bg-[url('/newslatter-bg.png')] bg-cover bg-center bg-no-repeat rounded-[3rem]"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-4xl font-bold">Never miss any Update!</h1>
                    <p className='text-white text-xl my-4'>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                    <div className='relative w-1/2 mt-4'>
                        <input type="email" placeholder='Enter your Email' className='w-full py-7 px-4 rounded-sm' />
                        <button className='flex justify-center items-center px-12 py-5 absolute top-2 bg-blue-600 text-white gap-2 right-2 rounded-sm'>Subscribe <FaUser/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription