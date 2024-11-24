import React from 'react'
import { FaArrowRight, FaTwitch } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa6'
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const LifeStyleRight = () => {
    return (
        <div>
            <div className="mb-4 border border-[#eeeeee] bg-[#f9faff]">
                    <div className='relative'>
                        <div className='flex justify-end'>
                        <img src="/ab.png" className='w-48 h-48' alt="" />
                        </div>
                        <img src="/lsp.jpg" alt="" className='w-52 h-52 rounded-full absolute top-12 left-20' />
                    </div>
             
             <div className='text-center py-12 mt-12'>
                <p className='text-[#232f4b] text-2xl font-bold'>Jenny Watson</p>
                <p className='text-gray-600 leading-relaxed px-14 mt-4'>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                <div className='flex justify-center items-center gap-3 mt-4'>
                    <div className='bg-[#eeeff7] hover:bg-[#a8aab7] text-[#232f4b] hover:text-[#0d6efd] p-2 rounded-full'>
                        <FaFacebookF/>
                    </div>
                    <div className='bg-[#eeeff7] hover:bg-[#a8aab7] text-[#232f4b] hover:text-[#0d6efd] p-2 rounded-full'>
                        <FaInstagram/>
                    </div>
                    <div className='bg-[#eeeff7] hover:bg-[#a8aab7] text-[#232f4b] hover:text-[#0d6efd] p-2 rounded-full'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='bg-[#eeeff7] hover:bg-[#a8aab7] text-[#232f4b] hover:text-[#0d6efd] p-2 rounded-full'>
                        <FaTwitter/>
                    </div>
                    <div className='bg-[#eeeff7] hover:bg-[#a8aab7] text-[#232f4b] hover:text-[#0d6efd] p-2 rounded-full'>
                        <FaPinterest/>
                    </div>
                </div>
             </div>
            </div>
            <div className='border border-[#eeeeee] p-7'>
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Categories</h2>
                <div className="flex justify-start items-start gap-3 mb-8">
                    <div className="w-[20%] h-[4px] rounded-full bg-[#0d6efd]"></div>
                    <div className="w-full h-[4px] rounded-full bg-[#e0e3e7]"></div>
                </div>
                <div>
                    <ul>
                        <li className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Lifestyle</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                        <li className='flex justify-between items-center mt-6 border-t border-[#eeeeee] pt-6'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Inspiration</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                        <li className='flex justify-between items-center mt-6 border-t border-[#eeeeee] pt-6'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Fashion</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                        <li className='flex justify-between items-center mt-6 border-t border-[#eeeeee] pt-6'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Photography</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                        <li className='flex justify-between items-center mt-6 border-t border-[#eeeeee] pt-6'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Travel</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                        <li className='flex justify-between items-center mt-6 border-t border-[#eeeeee] pt-6'>
                            <div className='flex justify-start items-center gap-2'>
                                <TfiAngleRight />
                                <p className='text-xl text-[#444444]'>Business</p>
                            </div>
                            <p className='text-xl text-[#444444]'>(05)</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border border-[#eeeeee] p-7 mt-8'>
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Related Posts</h2>
                <div className="flex justify-start items-start gap-3 mb-8">
                    <div className="w-[20%] h-[4px] rounded-full bg-[#0d6efd]"></div>
                    <div className="w-full h-[4px] rounded-full bg-[#e0e3e7]"></div>
                </div>
                <div>
                    <ul>
                        <li className='flex justify-between items-center gap-4'>
                            <img src="/high1.jpg" alt="" className='w-[4.5rem] h-[4.5rem] rounded-md shadow-sm' />
                            <div className=''>
                                <p className='text-xs text-[#828282]'>19 Jun 2022</p>
                                <p className='text-md font-semibold mt-2 text-[#444444]'>Perfect Photo Clicking Idea You Must Know.</p>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-4 mt-6'>
                            <img src="/high2.jpg" alt="" className='w-[4.5rem] h-[4.5rem] rounded-md shadow-sm' />
                            <div className=''>
                                <p className='text-xs text-[#828282]'>19 Jun 2022</p>
                                <p className='text-md font-semibold mt-2 text-[#444444]'>Best tourism site all over the world.</p>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-4 mt-6'>
                            <img src="/high3.jpg" alt="" className='w-[4.5rem] h-[4.5rem] rounded-md shadow-sm' />
                            <div className=''>
                                <p className='text-xs text-[#828282]'>19 Jun 2022</p>
                                <p className='text-md font-semibold mt-2 text-[#444444]'>Whats In Trend in Now Woman Fashion.</p>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-4 mt-6'>
                            <img src="/high4.jpg" alt="" className='w-[4.5rem] h-[4.5rem] rounded-md shadow-sm' />
                            <div className=''>
                                <p className='text-xs text-[#828282]'>19 Jun 2022</p>
                                <p className='text-md font-semibold mt-2 text-[#444444]'>Top 10 Healthy Food of Your Menu.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border border-[#eeeeee] p-7 mt-8'>
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Instagram</h2>
                <div className="flex justify-start items-start gap-3 mb-8">
                    <div className="w-[20%] h-[4px] rounded-full bg-[#0d6efd]"></div>
                    <div className="w-full h-[4px] rounded-full bg-[#e0e3e7]"></div>
                </div>
                <div className='grid grid-cols-3 gap-x-2 gap-y-2'>
                    <img src="/high5.jpg" alt="" className='w-full h-20 rounded' />
                    <img src="/ls2.jpg" alt="" className='w-full h-20 rounded'/>
                    <img src="/card3.jpg" alt="" className='w-full h-20 rounded'/>
                    <img src="/sp2.jpg" alt="" className='w-full h-20 rounded'/>
                    <img src="/high2.jpg" alt="" className='w-full h-20 rounded'/>
                    <img src="/sp3.jpg" alt="" className='w-full h-20 rounded'/>
                </div>
            </div>
            <div className='border border-[#eeeeee] p-7 mt-8'>
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Tags</h2>
                <div className="flex justify-start items-start gap-3 mb-8">
                    <div className="w-[20%] h-[4px] rounded-full bg-[#0d6efd]"></div>
                    <div className="w-full h-[4px] rounded-full bg-[#e0e3e7]"></div>
                </div>
                <div className='grid grid-cols-3 gap-x-2 gap-y-2'>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Travel</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Food</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Lifestyle</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Business</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Idea</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Finance</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Corporate</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Culture</button>
                    <button className='bg-[#ecf4fb] text-[#232f4b] text-sm font-semibold px-3 py-2'>Gym</button>
                </div>
            </div>
            <div className='bg-[#3756f7] px-8 py-10 mt-4'>
                <h1 className='text-4xl font-bold text-white pr-16'>How We Can Help You!</h1>
                <p className='text-white text-lg leading-loose mt-6'>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <button className='border border-white rounded-sm mt-6 px-4 py-3 text-white flex justify-start gap-8 items-center'>Contact Us<FaArrowRight/></button>
            </div>
        </div>
    )
}

export default LifeStyleRight