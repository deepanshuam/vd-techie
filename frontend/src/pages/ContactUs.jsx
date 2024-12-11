import React from 'react'
import Contact from '../components/contactus/Banner'
import Navbar from '../components/navbar/navbar'
import Form from '../components/contactus/Form'
import ContactCard from '../components/contactus/Cards'
import Footer from '../components/Footer/Footer'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Form/>
    <ContactCard/>
    <Footer/>
    </>
  )
}

export default ContactUs
