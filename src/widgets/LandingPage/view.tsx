import Header from '@widgets/Header/view'
import React from 'react'
import LandingPageContent from './components/Content'
import Footer from '@widgets/Footer'

export default function LandingPageView() {
  return (
   <main>
    <Header/>
    <LandingPageContent/>
    <Footer/>
   </main>
  )
}
