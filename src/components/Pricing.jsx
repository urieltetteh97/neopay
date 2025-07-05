import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { pricingOptions } from '../constants'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <div id='priceplans' className='mt-20'>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Price Plans
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className="p-10 border border-neutral-700 transform hover:scale-105 transition-all duration-200 ease-in hover:bg-gradient-to-b from-purple-600 to-cyan-600 rounded-xl">
                        <p className="text-4xl mb-8">
                            {option.title}
                            {option.title === "Premium" && (
                              <span className="text-xl mb-4 ml-2"> (Most Popular) </span>
                            )}
                        
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) =>(
                                <li key={index} className='mt-8 flex items-center '>
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex  justify-center items-center text-center
                        w-full h-12 p-5 mt-20 rounded-lg tracking-tight hover:bg-gray-500'> Subscribe</a>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Pricing