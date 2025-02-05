import { Menu, X, User, Book, Layers, CalendarCog, CodeXml, FileText } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/header.css'
import { button } from 'framer-motion/client'

export const Header = () => {

    const icons = {
        0: <User size={15} />,
        1: <Book size={15} />,
        2: <Layers size={15} />,
        3: <CalendarCog size={15} />,
        4: <FileText size={15} />

    }

    const Nav_list = [
        "Profile",
        "Projects",
        "Education",
        "Experience",
        "Resume"
    ]

    const [sidebar, setsidebar] = useState(false)

    const togglebar = () => {
        setsidebar(!sidebar)
    }

    return (
        <>
            <nav className='text-dark border w-100 px-3 d-flex justify-content-between justify-content-sm-evenly align-items-center py-4' style={{backgroundImage: 'Linear-Gradient(to right, rgba(255,0,0,0), rgb(169, 223, 232)'}}>
                <div className="">
                    <Link to={'/'} className='navlink fw-bold fs-4 text-info text-decoration-none d-flex align-items-center gap-2'><CodeXml className='w-5 text-dark' /> <span className='name'>Nilesh<i className='status'>.Dev</i></span></Link>
                </div>
                <button className={`rounded bg-transparent border-0`} onClick={togglebar}>{sidebar ? <X size={24} /> : <Menu size={24} />}</button>
            </nav >

            {
                sidebar &&
                <motion.div className={`position-absolute top-0 col-8 col-md-3 mx-auto z-2 ${sidebar ? `transition ease-in-out duration-300` : ``}`} style={{ height: "100vh", background: 'Linear-Gradient(white,dodgerblue)' }} 
                initial={{ x: "-100%" }}
                animate={{ x: sidebar ? 0 : "-100" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

                >
                    <div className='p-3 d-flex justify-content-between align-items-center border border-b'>
                        <span className='fw-bold'>Welcome</span>
                        <button className='border bg-transparent rounded' onClick={() => setsidebar(false)}><X /></button>
                    </div>
                    <div className='d-flex flex-column mb-1 px-3 gap-2 py-2'>

                        {
                            Nav_list.map((ele, index) => (
                                <Link key={ele} onClick={togglebar} to={ele == 'Profile' ? '/' : '/' + ele.toLowerCase()} className='sidebtn text-decoration-none cursor-pointer'>
                                    {Object.values(icons)[index]}{"  "}{ele}
                                </Link>
                            ))
                        }
                    </div>
                </motion.div>
            }
        </>
    )
}
