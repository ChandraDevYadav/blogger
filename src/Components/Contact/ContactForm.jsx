import React from 'react'

const ContactForm = () => {
  return (
    <div className=''>
      <h1 className='text-center text-4xl font-semibold text-[#232f4b] mt-12'>Have Any Question?</h1>
      <p className='text-center text-[#777777] text-[16px] mt-5'>It is a long established fact that a reader will be distracted <br /> content of a page when looking.</p>
        <div className='grid grid-cols-6 gap-4 px-14 mx-1 mt-6'>
            <div className='col-start-2 col-span-4 bg-white shadow-md border border-gray-100 p-10'>
                <div className='flex justify-start items-center gap-4'>
                <div className='w-full'>
                <input type="text" placeholder='Your Name*' className='bg-gray-100 py-3 px-4 rounded-2xl w-full' />
                </div>
                <div className='w-full'>
                <input type="email" placeholder='Your Email*' className='bg-gray-100 py-3 px-4 rounded-2xl w-full' />
                </div>
                </div>
                <div className='flex justify-start items-center gap-4 mt-6'>
                <div className='w-full'>
                <input type="text" placeholder='Your Phone*' className='bg-gray-100 py-3 px-4 rounded-2xl w-full' />
                </div>
                <div className='w-full'>
                <input type="email" placeholder='Your Subject*' className='bg-gray-100 py-3 px-4 rounded-2xl w-full' />
                </div>
                </div>
                <div className='flex justify-start items-center gap-4 mt-6'>
                <div className='w-full'>
                <textarea name="" id="" rows={8} placeholder='Message...' className='bg-gray-100 py-3 px-4 rounded-xl w-full'></textarea>
                </div>
                </div>
                <div className='flex justify-center items-center gap-4 mt-6'>
                <button className='bg-blue-600 text-white px-10 rounded-2xl font-semibold py-3'>Get In Touch</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm