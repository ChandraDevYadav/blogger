import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const MainFooter = () => {
    return (
        <div className='bg-[#191a1f] py-12 px-[11rem]'>
            <div className='grid grid-cols-10 gap-4'>
                <div className='col-span-3'>
                    <div className='flex justify-start items-center gap-3'>
                        <img src="/blog.png" alt="" className='w-12 h-12' />
                        <p className='text-3xl font-bold text-white'>Blogger</p>
                    </div>
                    <p className='text-white text-md pr-6 leading-loose mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className='col-span-2 flex justify-center items-start'>
                    <div>
                    <h1 className='text-xl font-bold text-white mt-2'>Important Link</h1>
                    <ul className='mt-6 leading-loose text-white'>
                        <li>News</li>
                        <li>Career</li>
                        <li>Technology</li>
                        <li>Startups</li>
                        <li>Gadgets</li>
                    </ul>
                    </div>
                </div>
                <div className='col-span-3'>
                <h1 className='text-xl font-bold text-white mt-2'>Browse by Tag</h1>
                    <div className='mt-6 grid grid-cols-3 justify-around items-center gap-x-2 gap-y-2 text-white'>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Travel</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Business</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Lifestyle</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Marketing</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Medical</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Sports</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Career</div>
                        <div className='bg-gray-700 px-4 text-center rounded-md py-2'>Foods</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-start'>
                <div>
                <h1 className='text-xl font-bold text-white mt-2'>Social Media</h1>
                    <ul className='mt-6 leading-loose text-white'>
                        <li className='flex justify-start items-center gap-2 text-md'><div className='bg-blue-600 text-white p-1 rounded-sm'><FaFacebookF/></div> Facebook</li>
                        <li className='flex justify-start items-center mt-3 gap-2 text-md'><div className='bg-orange-600 text-white p-1 rounded-sm'><FaInstagram/></div> Instagram</li>
                        <li className='flex justify-start items-center mt-3 gap-2 text-md'><div className='bg-black text-white p-1 rounded-sm'><FaTwitter/></div> Twitter</li>
                        <li className='flex justify-start items-center mt-3 gap-2 text-md'><div className='bg-red-600 text-white p-1 rounded-sm'><FaYoutube/></div> Youtube</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter