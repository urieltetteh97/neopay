import React from 'react'
import { features } from '../constants'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'


const FeatureSection = () => {
  return (
    <div id='featuresect' className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
            <span className='bg-neutral-900 text-cyan-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                Features
            </span>
            <motion.h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
            initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
                Secure transactions 
                <span className="bg-gradient-to-r from-purple-900 to-cyan-500 text-transparent bg-clip-text">
                    {" "} 
                    and global reach
                </span>
            </motion.h2>
        </div>
        <div className="flex col-4">
            <motion.p className="text-lg text-center text-neutral-500 max-w-4xl mt-6"
            initial={{ opacity: 0, translateY: 20 }}>  </motion.p>
        </div>













        <motion.div className="flex flex-wrap mt-10 lg:mt-20"
        initial={{ opacity: 0, translateX: 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
            {features.map((feature, index) => (
                <div key={index} className='w-full sm:1/2 lg:w-1/3'
                initial={{ opacity: 0, translateX: 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
                    <div className='flex'>
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 
                        justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                        <motion.h5 className="mt-1 mb-6 text-xl"
                        >{feature.text}</motion.h5>
                        <p className='text-md p-2 mb-20 text-neutral-200'>{feature.description}</p>
                    </div>
                    </div>
                    
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default FeatureSection