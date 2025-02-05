import React, { useEffect } from 'react'
import nilesh_resume from '../assets/Resume.pdf'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/resume.css'


const Resume = () => {

    useEffect(() => {
        document.title = 'Resume'
    }, [])

    return (
        <div className='container py-5 text-center'>
            <motion.h1 className='display-4 mb-4 p-3'
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}>
                Download Resume
            </motion.h1>
            <Link to={nilesh_resume} target="_blank" style={{ maxWidth: "250px" }} className='resumee text-decoration-none rounded-4 border p-3' >
                Download
            </Link>
        </div>
    )
}

export default Resume