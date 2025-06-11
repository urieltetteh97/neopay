import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <div className='mt-20 item-center justify-center border-0 rounded-md'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
            <form className='w-96 bg-neutral-800 p-6 rounded-lg shadow-lg'>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='username'>Username</label>
                <input className='w-full p-2 bg-neutral-700 text-white rounded-md' type='text' id='username' name='username' required />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
                <input className='w-full p-2 bg-neutral-700 text-white rounded-md' type='email' id='email' name='email' required />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='password'>Password</label>
                <input className='w-full p-2 bg-neutral-700 text-white rounded-md' type='password' id='password' name='password' required />
            </div>
            <button type='submit' className='w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default signup