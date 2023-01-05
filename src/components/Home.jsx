import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2C6D08]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-l text-[#C4A484]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#F8F0C6]'>Anthony Szabo</h1>
            <h2 className='text-4xl font-bold text-[#F8F0C6]'>I'm a Data Scientist</h2>
            <p className='text-l text-[#F8F0C6] py-4 max-w-[750px] text-[#F8F0C6]'>I'm a data scientist with a deep and expansive knowledge of statistics and I love digging into 
                projects within that realm. Currently I am working to expand my knowledge of machine learning, especially in image recognition and natural language processing.</p>
            <div>
                <button className='text-[#F8F0C6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C4A484] hover:border-[#C4A484]'>
                  <Link to="work" smooth={true} duration={500}>
                    View Work
                  </Link>
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home