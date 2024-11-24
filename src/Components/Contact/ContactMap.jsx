import React from 'react'

const ContactMap = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1'>
                <div className='mt-6'>
                    <iframe
                        class="w-full h-[600px] border-0 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14218.509965011563!2d87.26416780000001!3d26.452491499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7426c7005e2b%3A0x2e2459a8b5c4d147!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1692803148463!5m2!1sen!2snp"
                        allowfullscreen=""
                        loading="lazy"
                        width='100%'
                        height='600'
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactMap