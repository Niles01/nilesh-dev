import React from 'react'
import nilesh_resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/experience.css'

const Experience = () => {
    // useEffect(() => {
    //         document.title = 'Experience'
    //     }, [])
    return (
        <>
            <div className='px-2 px-sm-0 mt-4' style={{paddingBottom:'140px'}}>
                <div className="text-center p-4">
                    <motion.h1 className='display-4' 
                    //  className="mh display-3 fw-bold gradient-text"
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1 }}
                    >Experience</motion.h1>
                </div>
                <motion.div className='container d-flex justify-content-center align-items- flex-column p-4 bg-info-subtle rounded-5'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 2, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }} >
                    <h2>Python and ML Internship</h2>
                    <b><i>1 Month | 2023 June</i></b>
                    <hr />
                    Industry Institute Interaction Cell. Built a Linear and Logistic Regression model in Python to identify labels based on given features.
                    <br />
                    <Link to={nilesh_resume} target="_blank" style={{ maxWidth: "110px" }} className=' text-decoration-none rounded-4 border p-3 border-4' id="exphover">
                        Certificate
                    </Link>
                </motion.div>
            </div>

        </>
    )
}

export default Experience