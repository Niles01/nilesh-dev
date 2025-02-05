import React from 'react'
import nilesh_resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import '../css/section.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import Moreinfo from './Moreinfo'

const splitText = (surname) => surname.split('');

const splitTexts = (desc) => desc.split('');

export const Section = () => {
    const [textColor, setTextColor] = useState("#ffffff");

    useEffect(() => {
        let position = 0;
        const interval = setInterval(() => {
            position = (position + 1) % 100;

            if (position > 20 && position < 40) {
                setTextColor("#0d0c0c"); // Yellow
            }
            else if (position > 60 && position < 80) {
                setTextColor("#0d0c0c"); // Yellow
            }
            else {
                setTextColor("#ffffff"); // White
            }
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const surname = "Mistry";  // Text to reveal
    const desc = "Passionate to creating attractive coding structures and a frequent contributor to open-source initiatives. Together, let's create something truly remarkable!"
    const letters = splitText(surname);
    const elem = splitTexts(desc);

    return (
        <>
            <section className='sect d-flex justify-content-center align-items-center'>
                <div className="container d-block d-sm-flex gap-5 text-center justify-content-between text-sm-start align-items-center">
                    <div className='d-flex flex-column'>
                        <motion.h1
                            className="mh display-3 fw-bold gradient-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className='fs-2 fw-medium' style={{ color: textColor }}>Hey , Hello Viewers!</span>
                        </motion.h1>
                        <motion.div
                            className='my-2 fs-3'
                            initial={{ y: 0 }}               // Initial position (no movement)
                            animate={{ y: [-10, 10, -10, 10] }} // Wave up and down
                            transition={{
                                repeat: Infinity,              // Repeat the animation infinitely
                                repeatType: "loop",            // Loop type
                                duration: 1,                   // Duration of one wave cycle (1 second)
                                ease: "easeInOut",             // Smooth transition in and out
                            }}

                        >
                            👋 Hii!
                        </motion.div>
                        <h1 className='auth_name d-flex flex-wrap align-items-end justify-content-sm-start justify-content-center gap-sm-3 fw-bolder'>Nilesh <i className='surname font-monospace fw-bold'>
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }} // Start state (invisible, slightly moved down)
                                    animate={{
                                        opacity: 1,  // Fade in
                                        y: 0,        // Move to normal position
                                        transition: {
                                            delay: index * 0.2,  // Delay based on index for the sequential reveal
                                            type: "spring",      // Animation type
                                            stiffness: 100,      // Bounciness
                                            damping: 25,         // Ease out
                                        },
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}</i>
                        </h1>
                        <span className='fs-5 w-75 mx-auto mx-md-0'>
                            {elem.map((ele, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }} // Start state (invisible, slightly moved down)
                                    animate={{
                                        opacity: 1,  // Fade in
                                        y: 0,        // Move to normal position
                                        transition: {
                                            delay: index * 0.0150,  // Delay based on index for the sequential reveal
                                            type: "spring",      // Animation type
                                            stiffness: 100,      // Bounciness
                                            damping: 25,         // Ease out
                                        },
                                    }}
                                >
                                    {ele}
                                </motion.span>
                            ))}
                        </span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        >
                            <Link to={nilesh_resume} style={{ maxWidth: "250px", width: 'Fit-content' }} target='_blank' className="resumebtn hover btn border-primary my-4 px-4 py-2 mx-auto mx-sm-0" id="hover">Download Resume</Link>
                        </motion.div>
                    </div>
                    <div className='image-container'>
                        <motion.img
                            src={profile}
                            alt="Nilesh Mistry"
                            className="profile-img shadow-lg shadow-warning"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 2, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="reflection"
                            initial={{ x: "-100%", y: "-100%", opacity: 0.3 }} // Start off-screen (top-left) and semi-transparent
                            animate={{ x: "100%", y: "100%", opacity: 0.4 }}   // Move to bottom-right, increase opacity
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,                 // Each animation cycle lasts 2 seconds
                                ease: "linear",              // Constant speed
                            }}
                        />
                    </div>
                </div>


            </section >
            <Moreinfo />
        </>
    )
}
