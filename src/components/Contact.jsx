import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#2C6D08] flex justify-center items-center p-4 <Navbar/>:hidden'>
        <form method='POST' action="https://getform.io/f/ca2a461a-5f79-45f2-a393-86ad800a3e97" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-6 sm:text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C4A484] text-[#F4F0C6]'>Contact</p>
                <p className='text-[#F4F0C6] py-4'>Submit the form below or send me an email at anthony_szabo@hotmail.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email'></input>
            <textarea className='p-2 bg-gray-300' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#F4F0C6] border-2 hover:bg-[#C4A484] hover:border-[#C4A484] px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk!</button>
        </form>
    </div>
  )
}

export default Contact