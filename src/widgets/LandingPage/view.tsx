"use client"
import Header from '@widgets/Header/view'
import React, { useEffect, useState } from 'react'
import LandingPageContent from './components/Content'
import Footer from '@widgets/Footer'
import PreLoader from '@components/PreLoader'

export default function LandingPageView() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
   <main>
    {!isLoaded && <PreLoader/>}
    <Header/>
    <LandingPageContent/>
    <Footer/>
   </main>
  )
}
