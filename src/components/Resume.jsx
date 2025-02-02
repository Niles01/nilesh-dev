import React, { useEffect } from 'react'
import nilesh_resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom'


const Resume = () => {

    useEffect(() => {
        document.title = 'Resume'
    }, [])

    return (
        <div className='container py-5 text-center'>
            <h1 className='mb-4'>
                Download Resume
            </h1>
            <Link to={nilesh_resume} target="_blank" style={{ maxWidth: "250px" }} className='bg-info-subtle text-decoration-none rounded-4 text-dark border p-3'>
                Download
            </Link>
        </div>
    )
}

export default Resume