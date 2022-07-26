import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InputForm from '../components/InputForm'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Add Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='container w-screen h-screen'>
        <Navbar/>
        <div className='sticky top-0 lg:hidden w-screen border-b-2 bg-white z-10 p-2'>
          <span>Add Product</span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-screen' >
          <Tabs />
          <InputForm/>  
        </div>
      </main>
    </div>
    
   
  )
}

export default Home
