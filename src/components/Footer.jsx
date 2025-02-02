import React from 'react'

const Footer = () => {

  return (
    <footer className='bg-secondary z-1 py-4 px-2 text-light text-center w-100'>
        <div className='fs-6'>Copyright &copy; NileshDev {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer