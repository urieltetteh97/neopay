import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData2 from '../assets/Scan and Pay.json'
import animationData3 from '../assets/Payment Successful Animation.json'
import animationData4 from '../assets/Marketing analytics.json'
import animationData5 from '../assets/Id authentication.json'
import animationData6 from '../assets/Finance App.json'  
import { useRef } from 'react'


const FeatureSection = () => {
    const payanimation = useRef()
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
        <div className="flex flex-wrap justify-center items-start">
            
                <motion.div className="w-full md:w-1/2 px-4">
                <Lottie  lottieRef={payanimation} 
                animationData = {animationData2} 
                style={{ width: '350px', height: '350px', margin: '0 auto', borderRadius: '16px' }} />
                <p className="text-lg text-center text-neutral-500 max-w-4xl ">
                 <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">User Security</b>, Secure sign in options from passcodes to fingerprint scans <br />
                   to protect your account.
                </p>
                </motion.div>
                <motion.div className="w-full md:w-1/2 px-4"
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}>
                <Lottie  lottieRef={payanimation} 
                animationData = {animationData3} 
                style={{ width: '350px', height: '350px', margin: '0 auto', borderRadius: '16px' }} />
                <p className="text-lg text-center text-neutral-500 max-w-4xl ">
                   <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">Seamless integration </b>, Smoothly complete payments for your bills and subscriptions with <br />
                  Mobile Money and Bank Transfers 
                </p>
                </motion.div>
                 <motion.div className="w-full md:w-1/2 px-4"
                 initial={{ opacity: 0, translateX: -100 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}>
                <Lottie  lottieRef={payanimation} 
                animationData = {animationData4} 
                style={{ width: '350px', height: '350px', margin: '0 auto', borderRadius: '16px' }} />
                <p className="text-lg text-center text-neutral-500 max-w-4xl ">
                  <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">Analytics Dashboard</b>, A detailed breakdown of your transaction history  <br />
                   to help you keep track of your spending and income
                </p>
                </motion.div>
                <motion.div className="w-full md:w-1/2 px-4"
                initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
                <Lottie  lottieRef={payanimation} 
                animationData = {animationData5} 
                style={{ width: '350px', height: '350px', margin: '0 auto', borderRadius: '16px' }} />
                <p className="text-lg text-center text-neutral-500 max-w-4xl ">
                <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">Two factor Authentication</b>, Further security provided on every transaction with  <br />
                 two-factor authentication, ensuring your transactions are safe and secure.
                </p>
                </motion.div>
                 <motion.div className="w-full md:w-1/2 px-4"
                 initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}>
                <Lottie  lottieRef={payanimation} 
                animationData = {animationData6} 
                style={{ width: '350px', height: '350px', margin: '0 auto', borderRadius: '16px' }} />
                <p className="text-lg text-center text-neutral-500 max-w-4xl ">
                <b class ="bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-700 to-cyan-600">User Friendly</b>, A concise and easy to navigate  <br />
                  interface that allows you to focus on what matters most - your transactions.
                </p>
                </motion.div>
                 
              
            </div>

            </div>



  )
}

export default FeatureSection