import React from 'react'
import nilesh_resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom'

export const Section = () => {
    return (
        <>

            <section className='px-3 bg-info-subtle' style={{ padding: '120px' }}>
                <div className="container d-block d-sm-flex gap-5 text-center justify-content-between text-sm-start align-items-center">
                    <div className='d-flex flex-column'>
                        <h1 className='fs-2 fw-medium'>Hey , Hello Viewers!</h1>
                        <h1 className='fs-1 fw-bolder'>Nilesh Mistry</h1>
                        <span className='fs-5'>Passionate to creating attractive coding structures and a frequent contributor to open-source initiatives. Together, let's create something truly remarkable!</span>
                        <Link to={nilesh_resume} style={{ maxWidth: "250px" , width: 'Fit-content'}} target='_blank' className="btn btn-primary my-4 px-4 py-2 mx-auto mx-sm-0" id="">Download Resume</Link>
                    </div>
                    <div>
                        <img className='border border-dark border-3 rounded-start-5' width={250} src="https://media.licdn.com/dms/image/v2/D5635AQHcD5NTLSliZw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1692330521090?e=1739095200&v=beta&t=onfJa2kxql3HoMpqEhcSUhQUCRT6__6DIBaSYGfENGM" alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
