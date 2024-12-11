import React from 'react'
import Bannerhire from '../components/hirefromus/Banner'
import Navbar from '../components/navbar/navbar'
import Services from '../components/hirefromus/cardsofdata'
import CandidateSection from '../components/hirefromus/Candidates'
import JoinVDSection from '../components/hirefromus/Impo'
import RecruiterForm from '../components/hirefromus/Formm'
import AssistanceSection from '../components/hirefromus/Call'
import Footer from '../components/Footer/Footer'
// import SlidingTextSection from '../components/hirefromus/Qutes'

const HireFromUs = () => {
  return (
    <>
    <Navbar/>
    <Bannerhire/>
    <Services/>
    <CandidateSection/>
    <JoinVDSection/>
    {/* <SlidingTextSection/> */}
    <RecruiterForm/>
    <AssistanceSection/>
    <Footer/>
    </>
  )
}

export default HireFromUs
