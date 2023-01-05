import React from 'react'
import GitHub from '../assets/github.png'
import Pandas from '../assets/pandas.png'
import Python from '../assets/python.png'
import ReactImage from '../assets/react.png'
import SQL from '../assets/sql.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2C6D08] text-[#F8F0C6]'>
      <div className='max-w-[1000px] mx-auto p-4 pl-8 flex flex-col justify-center w-full h-full'>
       <div className='sm:text-center'>
         <p className='text-4xl font-bold inline border-b-4 border-[#C4A484]'>Skills</p>
         <p className='pt-4'>These are some of the software that I've worked with:</p>
        </div>
         
       <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
         <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={GitHub} alt="GitHub icon" />
            <p className='pt-1'>GitHub</p>
          </div>
          <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={SQL} alt="SQL icon" />
            <p className='pt-1'>SQL</p>
          </div>
          <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={Python} alt="Python icon" />
            <p className='pt-1'>Python</p>
          </div>
          <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={Pandas} alt="Pandas icon" />
            <p className='pt-1'>Pandas</p>
          </div>
          <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={ReactImage} alt="React icon" />
            <p className='pt-1'>React</p>
          </div>
          <div className='bg-[#7a6249] shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-2' src={Tailwind} alt="Tailwind icon" />
            <p className='pt-1'>Tailwind</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Skills