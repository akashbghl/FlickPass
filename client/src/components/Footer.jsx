import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-24 px-6 md:px-36 py-5'>

      <div className='flex flex-col  md:flex-row gap-10'>

        <div className='w-full md:w-1/2'>
          <img onClick={() => { navigate('/'); scrollTo(0, 0) }} src={assets.logo} alt="" className='w-[138px] my-2 scroll-smooth cursor-pointer' />
          <p className='my-2 text-sm text-gray-300 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, enim quo! Obcaecati magni id eius velit qui hic, repudiandae praesentium rerum ad, aliquam ducimus repellendus illum quas laboriosam dolorem fugit?</p>
          <div className='flex gap-2 flex-wrap'>
            <button className='cursor-pointer'>
              <img src={assets.googlePlay} alt="" />
            </button>
            <button className='cursor-pointer'>
              <img src={assets.appStore} alt="" />
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col sm:flex-row gap-10 md:gap-32 justify-start md:justify-end'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg'>Company</h1>
            <ul className='flex flex-col gap-2'>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>Home</Link>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>About us</Link>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>Contact us</Link>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>Privacy Policy</Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg'>Get in Touch</h1>
            <ul className='flex flex-col gap-2'>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>+91 123456789</Link>
              <Link to='/' className='text-gray-300 hover:text-white cursor-pointer'>contact@example.com</Link>
            </ul>
          </div>
        </div>

      </div>

      <div className='w-full border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400'>
        © {new Date().getFullYear()} FlickPass. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
