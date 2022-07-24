import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InputForm from '../components/InputForm'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

const Home: NextPage = () => {
  return (
    <main>
    <div className='container w-screen'>
      <Navbar/>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-screen' >
        <Tabs/>
        <InputForm/>
      </div>
    </div>
    </main>
  )
}

export default Home
