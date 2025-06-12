import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
              <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">

                  <a href='#' className="text-3xl tracking-tight cursor-pointer font-bold transform hover:scale-110 transition-all duration-300 ease-in-out
                   text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-600">Neopay</a>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                  {navItems.map((item, index) => (
                    <li className='hover:text-neutral-500' key={index}>
                        <a  href= {item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a href="#" className="py-2 px-3 border-1  rounded-md transform hover:scale-110 transition-all duration-300 ease-in">Sign In</a>
                  <Link to='/signup' className="bg-gradient-to-r from-purple-800 to bg-cyan-600 py-2 px-3 border-0 rounded-md transform hover:scale-110 transition-all duration-300 ease-in"> Create an account</Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500">
                    {mobileDrawerOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                  </button>
                </div>
              </div>
                  {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex 
                    flex-col justify-center items-center lg:hidden">
                      <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className='py-4 hover:text-neutral-500'>
                        <a href= {item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6">
                  <a href="#" className="py-2 px-3 border rounded-md transform hover:scale-110 transition-all duration-300 ease-in"> Sign In</a>
                  <Link to='/signup' className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-800 to-cyan-600 transform hover:scale-110 transition-all duration-300 ease-in"> Create an account</Link>
                </div>
                    </div>
                  )}
            </div>
    
    </nav>
  )
}

export default Navbar