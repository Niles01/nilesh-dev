import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {

  return (
    <footer className='d-flex flex-column position-relative z-1 border-top py-4 px-2 bottom-0 my-0 text-dark text-center w-100' style={{ backgroundImage:'Linear-Gradient(to bottom left, rgba(255,0,0,0), rgb(141, 189, 197)'}}>
      <div className="socialmedia d-flex justify-content-center gap-2 w-2 mb-2">

        <Link className='somd p-2' to="https://in.linkedin.com/in/nilesh-mistry-7b708621b" ><img id="im"  width={30} src="https://cdn-icons-png.flaticon.com/128/174/174857.png" /></Link>
        <Link className='somd p-2' to="https://github.com/Niles01" ><img  id="im" width={30}src="https://cdn-icons-png.flaticon.com/128/733/733609.png" /></Link>
        <Link className='somd p-2' to="https://twitter.com/nileshmistry02" ><img  id="im" width={30} src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" /></Link>
      </div>
        <i className='small'>Design And Developed By Nilesh Mistry</i>
        <div className='fs-6'>Copyright &copy; NileshDev {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer