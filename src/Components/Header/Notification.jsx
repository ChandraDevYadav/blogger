import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'

const Notification = () => {
  return (
    <div className='pl-12 pr-10 py-6'>
        <div className='flex justify-start items-start mt-4 gap-4'>
            <img src="/blog.png" alt="" className='w-12 h-12' />
            <h1 className='text-3xl text-white font-bold'>Blogger</h1>
        </div>
        <h1 className='text-xl text-white font-semibold my-6'>Our Latest News</h1>
        <div className='flex justify-start items-start gap-4'>
            <img src="/high1.jpg" alt="" className='w-20 h-[4.5rem] rounded' />
            <div>
                <h1 className='text-sm text-gray-400'>21 Nov 2024</h1>
                <p className='uppercase text-sm text-white font-semibold mt-2'>Perfect photo clicking idea you must know</p>
            </div>
        </div>
        <div className='flex justify-start items-start gap-4 mt-8'>
            <img src="/high3.jpg" alt="" className='w-20 h-[4.5rem] rounded' />
            <div>
                <h1 className='text-sm text-gray-400'>21 Nov 2024</h1>
                <p className='uppercase text-sm text-white font-semibold mt-2'>Perfect photo clicking idea you must know</p>
            </div>
        </div>
        <div className='flex justify-start items-start gap-4 mt-8'>
            <img src="/high4.jpg" alt="" className='w-20 h-[4.5rem] rounded' />
            <div>
            <h1 className='text-sm text-gray-400'>21 Nov 2024</h1>
            <p className='uppercase text-sm text-white font-semibold mt-2'>Perfect photo clicking idea you must know</p>
            </div>
        </div>
        <h1 className='text-2xl font-semibold text-white mt-6'>Contact Us</h1>
        <div className='flex justify-start items-center gap-4 mt-4'>
        <SlLocationPin className='text-white text-xl'/>
        <div>
            <p className='text-white'>07 Street Mahabir Chowk</p>
            <p className='text-white'>Hanumannagar Kankalni Nepal</p>
        </div>
        </div>
        <div className='flex justify-start items-center gap-4 mt-4'>
        <FiPhoneCall className='text-white text-xl'/>
        <div>
            <p className='text-white'>+977-980-5912060</p>
        </div>
        </div>
    </div>
  )
}

export default Notification