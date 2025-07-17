
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../assets/Finance App.json'
import { useRef } from 'react'

const About = () => {
  const financeanimation = useRef()
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
        <Lottie  lottieRef={financeanimation} 
        animationData = {animationData} 
        style={{ width: '450px', height: '450px', margin: '0 auto', borderRadius: '16px' }} />
        <p className="text-lg text-neutral-500 max-w-4xl ">
          At <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">Neopay</b>, we believe in that your transactions should be as seamless and stress free <br />
          as going for a short walk. Convenient and reliable, that's what we want for you!
        </p>
      </div>
    </motion.div>
  )
}

export default About