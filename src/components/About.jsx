import React, { useState } from 'react'
import ui from '../assets/appinterface.jpg'
import { motion } from 'framer-motion'


const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <motion.div id='aboutsect' className="flex flex-col items-center mt-6 lg:mt-20 transition-opacity duration-500 ease-in-out"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}>
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Building the global payment infrastructure
        <span className="bg-gradient-to-r from-purple-700 to-cyan-600 text-transparent bg-clip-text">
          {" "}
          for African Businesses
        </span>
      </motion.h1>
      <motion.p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
      >
        We aim to simplify global trade payment for African businesses by providing innovative and locally-tailored solutions, leveraging technology to improve trade and finance
      </motion.p>
      <div className="space-x-5 justify-center items-center mt-4">
        <motion.a
          href=""
          className="mt-3 items-center border-0 rounded-md py-2 px-2 bg-gradient-to-r from-purple-700 to-cyan-600 hover:animate-pulse duration-100"
          whileHover={{ scale: 2 }}
        >
          Take the first step
        </motion.a>
        <motion.a
          href=""
          className="items-center py-2 px-2 border rounded-md bg-neutral hover:animate-pulse duration-200"
        >
          Find out more
        </motion.a>
      </div>
      <div className="flex-mt-10 justify-center items-center">
        <motion.img
          src={ui}
          alt="About Neopay"
          onLoad={() => setImageLoaded(true)}
          className={`w-2xl h-auto mt-7 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeIn' }}
        />
      </div>
    </motion.div>
  )
}

export default About