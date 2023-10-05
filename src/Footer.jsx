import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='flex flex-col '>
            <div className='bg-gray-900 text-white h-[50vh] flex  justify-center items-center space-y-10 px-3'>
                <div className='w-[50%] flex  items-center'>
                <a href="https://hacktoberfest.com/" target='blank'>    <img src="https://hacktoberfest.com/_next/static/media/logo-hacktoberfest--horizontal.ebc5fdc8.svg" className='w-[25rem] cursor-pointer' alt="" /> </a>
                </div>
                <div className='w-[50%] space-y-6 flex flex-col items-center '>
                <p className='text-5xl text-center'>Be a gooder!</p>

                <div className='flex'>
                    <div className='flex flex-col '>
                    <input className='text-white bg-gray-900 w-[26rem] h-full' type="text" placeholder='Email address' />
                    <p className="bg-blue-500 h-1 w-full"></p>
                    </div>

                    <button className='bg-blue-500 px-4 py-2' >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black flex justify-between px-3 h-[8vh] items-center '>
                <ul className='flex space-x-4'>
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'>Cookie Policy</li>
                    <li className='cursor-pointer'>Terms & Conditions</li>
                </ul>
                <ul className='flex space-x-4'>
                    <li className='cursor-pointer text-2xl'> <AiFillFacebook /> </li>
                    <li className='cursor-pointer text-2xl'> < AiOutlineInstagram /></li>
                    <li className='cursor-pointer text-2xl'> <a href="https://github.com/Zyro231-2/Human_mg" target='blank'> < AiOutlineGithub />  </a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
