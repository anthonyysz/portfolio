import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2C6D08] text-[#F8F0C6]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C4A484]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold pl-4'>
                    <p>Hey! Feel free to look around!</p>
                  </div>
                  <div className='pl-4 sm:text-left'>
                    <p>I am a training Machine Learning Engineer and Data Scientest recently graduated from Springboard's Data Science Career Track.</p>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default About