import React, { useState } from 'react'
import ui from '../assets/appinterface.jpg'

const About = () => {
  // Add state for image loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 transition-opacity to duration-500 ease-in-out">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Building the global payment infrastructure 
        <span className="bg-gradient-to-r from-purple-700 to-cyan-600 text-transparent bg-clip-text">
          {" "}
          for African Businesses</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We aim to simplify global trade payment for African businesses by providing innovative and locally-tailored solutions, leveraging technology to improve trade and finance
      </p>
    <div className="space-x-5 justiffy-center items-center mt-4">
      <a href="" className="mt-3 items-center border-0 rounded-md py-2 px-2 bg-gradient-to-r from-purple-700 to-cyan-600 hover:animate-pulse duration-100"> Take the first step</a>
      <a href="" className="items-center py-2 px-2 border rounded-md bg-black hover:animate-pulse duration-100">Find out more</a>
      </div>
      <div className="flex-mt-10 justify-center items-center">
        <img 
          src={ui} 
          alt="About Neopay" 
          onLoad={() => setImageLoaded(true)}
          className={`w-2xl h-auto mt-7 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  )
}

export default About