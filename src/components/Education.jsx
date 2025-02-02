import React from 'react'

const Education = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column py-5 px-sm-5'>
            <h1>University</h1>
        <div className="university p-5 d-flex justify-content-center align-items-center flex-column  bg-info-subtle rounded-5">
            <b><p> Bachelor of Engineering in K J Somaiya Institute Of Technology , Mumbai </p></b>
                Electronics Engineering  
               <b>CGPA - 9.03/10</b> 
               2019-2023
        </div>
        <hr />
        

            <h1>Skills</h1>
        <div className="skills p-5 bg-info-subtle rounded-5">
            <li><b>Programming Languages:</b> Python, C++, Java, JavaScript, SQL</li>
            <li><b>Frontend Development:</b>  React.js, HTML, CSS, Bootstrap, jQuery, Angular</li>
            <li><b>Backend & Databases:</b>  MySQL</li>
            <li><b>Other Technologies:</b>  Sanity.io, APIs (Fetch API, Rapid API), Android Studio</li>
            <li><b> Version Control:</b> Git & GitHub</li>  
        </div>
            
            <hr />
        <h1>Certifications</h1>
        <div className="certifications p-5 bg-info-subtle rounded-5">
            <li>Python and ML - Coursera</li>
            <li>C and C++ - NPTEL</li>
            <li>Data science for Engineers - NPTEL</li>
            <li>Blockchain and ethereum - LinkedIn Learning</li>
        </div>

    </div>
  )
}

export default Education