import { Menu , X , User , Book , Layers , FileText } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const icons = {
        0 : <User size={15}/>,
        1 : <Book size={15}/>,
        2 : <Layers size={15}/>,
        3 : <FileText size={15}/>
    }

    const Nav_list = [
        "Profile",
        "Projects",
        "Education",
        "Resume"
    ]

    const [sidebar, setsidebar] = useState(false)

    const togglebar = () => {
        setsidebar(!sidebar)
    }

    return (
        <>
            <nav className='bg-secondary w-100 p-3 d-flex justify-content-between justify-content-sm-evenly align-items-center'>
                <div className="">
                    <Link to={'/'} className='fw-bold fs-4 text-info text-decoration-none'>Nilesh<i className='text-warning'>.Dev</i></Link>
                </div>
                <button className={`border border te rounded bg-transparent text-light py-1 px-2`} onClick={togglebar}><Menu/></button>
            </nav>

            {
                sidebar && 
                <div className={`position-absolute top-0 w-sm-25 w-50 z-2 bg-body-secondary ${sidebar ? `transition ease-out duration-300`:``}  `} style={{ height: '100vh' }}>
                    <div className='p-3 d-flex justify-content-between align-items-center border border-b'>
                        <span className='fw-bold'>Welcome</span>
                        <button className='border bg-transparent rounded' onClick={()=>setsidebar(false)}><X/></button>
                    </div>
                    <div className='d-flex flex-column mb-1 px-3 gap-2 py-2'>
                        
                        {
                            Nav_list.map((ele , index) => (                               
                                <Link key={ele} onClick={togglebar} to={ele == 'Profile' ? '/' : '/'+ ele.toLowerCase()} className='text-dark text-decoration-none'>
                                    {Object.values(icons)[index]}{"  "}{ele}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}
