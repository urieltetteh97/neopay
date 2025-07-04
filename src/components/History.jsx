import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import NGSbanner from '../assets/NGSbanner.png'
import { checklistItems } from '../constants'
import { motion } from 'framer-motion'
 
const History = () => {
  return (
    
    <motion.div id='hist' className='mt-20'
    initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-6 tracking-wide">
        Here {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-500">
        To Help
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <img src= {NGSbanner} alt="" />
        </div>
        <div className="pt-5 w-full lg:w-1/2">
        {checklistItems.map((item, index) =>(
          <div key={index} className='flex mb-12'>
            <div className="text-purple-400 mx-6 bg-neutral-900 h-10 w-10 
            p-2 justify-center items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>

          </div>
        )
        )}
        </div>
      </div>
    
    
    </motion.div>
  )
}

export default History