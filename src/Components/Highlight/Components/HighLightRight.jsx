import React from 'react'
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const HighLightRight = () => {
    return (
        <div>
            <div className='border border-[#eeeeee] p-7'>
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Trending Topics</h2>
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
                <h2 className="text-xl font-semibold mb-4 text-[#444444]">Popular Post</h2>
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
            <div className='mt-8'>
                <img src="/add.jpg" alt="" className='w-full h-full' />
            </div>
        </div>
    )
}

export default HighLightRight