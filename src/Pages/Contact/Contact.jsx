import React from 'react'
import ContactHero from '../../Components/Contact/ContactHero'
import ContactMain from '../../Components/Contact/ContactMain'
import ContactForm from '../../Components/Contact/ContactForm'
import ContactMap from '../../Components/Contact/ContactMap'

const Contact = () => {
  return (
    <div>
        <ContactHero/>
        <ContactMain/>
        <ContactForm/>
        <ContactMap/>
    </div>
  )
}

export default Contact