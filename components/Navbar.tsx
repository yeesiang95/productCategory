import { NextPage } from "next";
import Link from "next/link";


const Navbar:NextPage =()=>{
    return(
        <>
        <nav className='bg-black px-2 sm:px-4 py-2.5 w-screen h-16 flex items-center justify-center md:justify-start '>
        <span className='text-white  text-2xl md:ml-12'>LOGO</span>
        <div className="hidden w-full md:block md:w-auto">
          <ul className='flex ml-16'>
            <li className='mr-6'>
              <Link href={'/events'}>
                <a className='text-white'>EVENTS</a>
              </Link>
              
            </li>
            <li className='mr-6'>
              <a className='text-white'>FEATURES</a>
            </li>
            <li className='mr-6'>
              <a className='text-white'>COMMUNITY</a>
            </li>
            <li className='mr-6'>
              <a className='text-white'>CATELOGUE</a>
            </li>
          </ul>
          </div>
          <div className="ml-auto mr-8">
            <img className="w-10 h-10 rounded-full" src="/blank_picture.png" />
          </div>
      </nav>
      </>
    )
}
export default Navbar;