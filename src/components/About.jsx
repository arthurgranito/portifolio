import React from 'react'
import aboutImg from '../assets/arthurGranitoProfile2.jpg'
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3, ABOUT_TEXT_4 } from '../constants'
import {motion} from 'framer-motion'

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="About" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className='my-2 max-w-xl pt-6'>{ABOUT_TEXT_1}</p>
                        <p className='my-2 max-w-xl'>{ABOUT_TEXT_2}</p>
                        <p className='my-2 max-w-xl'>{ABOUT_TEXT_3}</p>
                        <p className='my-2 max-w-xl'>{ABOUT_TEXT_4}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
