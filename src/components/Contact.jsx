import React from 'react'


const Contact = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center my-10 lg:my-20">
            Contact Us
        </h2>
        <div className="flex flex-wrap justify-center">
                <h3 className=" text-neutral-500 text-thin">Reach us for further information on {" "}
                    <span className="bg-gradient-to-r from-purple-800 to-cyan-500 bg-clip-text text-transparent">neoglobalsolutionsltd@gmail.com</span>
                </h3>
              
        </div>
        <div className="flex flex-wrap justify-center">
          <p> 
                  <span className="text-sm text-neutral-500">
                 
                    Haatso - Agbogba Road, Accra</span>
                </p> 
        </div>
    </div>
  )
}

export default Contact