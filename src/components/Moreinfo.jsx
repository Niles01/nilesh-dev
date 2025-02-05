import React from 'react'
import '../css/moreinfo.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const splitTextt = (info) => info.split('');

const more = [
    {
        name: "Projects",
        image: "https://cdn-icons-png.flaticon.com/128/8644/8644515.png",
        url: "https://github.com/niles01"
    },
    {
        name: "Skills",
        image: "https://cdn-icons-png.flaticon.com/128/6171/6171939.png",
        url: 'https://in.linkedin.com/in/nilesh-mistry-7b708621b'
    },
];

const ToolCard = ({ name, image }) => {
    return (

        <div id='testimonial' className="d-flex justify-content-center align-items-center border border-3 p-5 flex-column w-100 bg-gray rounded-5 shadow-lg">
            <img src={image} width={80} alt={name} className=" w-full h-4 object-cover mx-auto h-100 w-100" >
            </img>
            <h5 className='fs-2 text-dark' id='test_name'>{name}</h5>
        </div>
    );
};

const Moreinfo = () => {

    const info = " Have experience in Python, React.js, and web development, along with knowledge of data structures and algorithms.Also have worked on various projects, including web apps, AI - based result analysis, and database driven applications." ;

    // console.log(info.valueOf())

    const infos = splitTextt(info);

    return (
        <div className="moreinfo bg-primary d-flex flex-column p-5">
            <div className="container text-center text-sm-start">
                <h2 className='' style={{ fontSize: '50px' }}> 
                    <b>
                    <motion.i className='moree'
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                      > Get More About me </motion.i></b></h2>
                <span className='info fs-5'>
                    {infos.map((eles, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50 }} // Start state (invisible, slightly moved down)
                            animate={{
                                opacity: 1,  // Fade in
                                y: 0,        // Move to normal position
                                transition: {
                                    delay: index * 0.02,  // Delay based on index for the sequential reveal
                                    type: "spring",      // Animation type
                                    stiffness: 100,      // Bounciness
                                    damping: 25,         // Ease out
                                },
                            }}
                        >
                    {eles}
                    </motion.span>
                    ))}
                </span>
            </div>

            <div className="d-flex justify-content-center flex-wrap align-items-center gap-4 bg-gray-800 py-3 p-sm-5">
                {more.map((tool, index) => (
                    <Link to={tool.url} className='info text-decoration-none text-center'>
                        <ToolCard key={tool.name} 
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                                    scale: 1.2, 
                                    zIndex: 6,  // Brings the card above others
                                    transition: { duration: 0.3 },
                                  }} {...tool} >
                                    </ToolCard>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Moreinfo