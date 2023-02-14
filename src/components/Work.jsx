import React from 'react'
import Springboard from '../assets/springboard.png'
import TailwindReact from '../assets/tailwindreact.png'
import Apple from '../assets/apple.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#F8F0C6] bg-[#2C6D08]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 sm:text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C4A484]'>Work</p>
                <p className='pt-4'>Here's some of my recent work:</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${TailwindReact})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#F8F0C6] tracking-wider'>
                            Portfolio Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/anthonyysz/portfolio">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Springboard})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-l font-bold text-[#F8F0C6] text-center tracking-wider'>
                            Customer Lifetime
                            Value Analysis
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/anthonyysz/CapstoneTwoPublic">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Springboard})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#F8F0C6] tracking-wider'>
                            Time Series Analysis
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/anthonyysz/CapstoneThree">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Apple})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-l font-bold text-[#F8F0C6] text-center tracking-wider'>
                            Fruit Image
                            Recognition
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/anthonyysz/fruit_image_recognition">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Work