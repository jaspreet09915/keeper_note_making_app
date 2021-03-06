import React from 'react'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TextArea from '../Components/TextArea'
import Notes from '../Components/Notes'

 

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Keeper App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className='min-h-screen'>
          <TextArea/>
          <Notes/>
      </main>
      <Footer/>
    </div>
  )
}
