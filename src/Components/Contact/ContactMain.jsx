import React from 'react'

const ContactMain = () => {
  return (
    <div className='flex justify-center items-center py-10'>
        <div className="grid grid-cols-3 gap-4">
            <div className=''>
                <div className='flex flex-col justify-center items-center px-16 py-12 bg-white shadow-md border border-gray-100'>
                    <div className='bg-gray-100 p-4 rounded-full'>
                    <img src="/home.svg" className='w-12 h-12' alt="" />
                    </div> 
                    <h1 className='text-center text-2xl font-semibold mt-4 text-gray-700'>Address</h1>
                    <p className='text-center mt-4 text-gray-500 leading-loose'>7 Green Lake Street <br /> Crawfordsville, IN 47933</p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center px-16 py-12 bg-white shadow-md border border-gray-100'>
                    <div className='bg-gray-100 p-4 rounded-full'>
                    <img src="/mail-2.svg" className='w-12 h-12' alt="" />
                    </div> 
                    <h1 className='text-center text-2xl font-semibold mt-4 text-gray-700'>Email Us</h1>
                    <p className='text-center mt-4 text-gray-500 leading-loose'>Bloggar@gmail.com <br /> helloyou@gmail.com</p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center px-16 py-12 bg-white shadow-md border border-gray-100'>
                    <div className='bg-gray-100 p-4 rounded-full'>
                    <img src="/app.svg" className='w-12 h-12' alt="" />
                    </div> 
                    <h1 className='text-center text-2xl font-semibold mt-4 text-gray-700'>Call Now</h1>
                    <p className='text-center mt-4 text-gray-500 leading-loose'>+1 800 123 456 789 <br /> +1 800 123 654 987</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMain