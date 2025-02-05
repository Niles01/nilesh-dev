import React from 'react'
import {motion} from 'framer-motion'

const Education = () => {
    
  return (
    <div className='container d-flex align-items-center gap-3 flex-column py-5 px-sm-5'>
            <motion.h1 className='display-4'
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}>University</motion.h1>
        <motion.div className="university p-5 d-flex justify-content-center align-items-center flex-column  bg-info-subtle rounded-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 2, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
            <b><p> Bachelor of Engineering in K J Somaiya Institute Of Technology , Mumbai </p></b>
                Electronics Engineering  
               <b>CGPA - 9.03/10</b> 
               2019-2023
        </motion.div>
        

            <motion.h1 className='display-4' 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             >Skills</motion.h1>
        <motion.div className="skills p-5 bg-info-subtle rounded-5"
        initial={{ opacity: 0, y: 50 }} // Start off-screen below
        animate={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ duration: 0.6, ease: "easeOut" }}>
            <li><b>Programming Languages:</b> Python, C++, Java, JavaScript, SQL</li>
            <li><b>Frontend Development:</b>  React.js, HTML, CSS, Bootstrap, jQuery, Angular</li>
            <li><b>Backend & Databases:</b>  MySQL</li>
            <li><b>Other Technologies:</b>  Sanity.io, APIs (Fetch API, Rapid API), Android Studio</li>
            <li><b> Version Control:</b> Git & GitHub</li>  
        </motion.div>
            
        <motion.h1 className='display-4'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}>Certifications</motion.h1>
        <motion.div className="certifications p-5 bg-info-subtle rounded-5"
        initial={{ opacity: 0, y: 50 }} // Start off-screen below
        animate={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ duration: 0.6, ease: "easeIn" }}
        >
            <li>Python and ML - Coursera</li>
            <li>C and C++ - NPTEL</li>
            <li>Data science for Engineers - NPTEL</li>
            <li>Blockchain and ethereum - LinkedIn Learning</li>
        </motion.div>

    </div>
  )
}

export default Education