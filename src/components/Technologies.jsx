import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaDocker, FaHtml5, FaJava, FaJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'
import { SiFramer, SiPostman, SiSpring } from 'react-icons/si';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandCSharp } from 'react-icons/tb';
import { AiOutlineDotNet } from 'react-icons/ai';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className='text-7xl text-red-500' />
                </motion.div>

                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoCss3 className='text-7xl text-blue-500' />
                </motion.div>

                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className='text-7xl text-yellow-400' />
                </motion.div>

                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className='text-7xl text-teal-400' />
                </motion.div>

                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFramer className='text-7xl text-blue-600' />
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className='text-7xl text-red-600' />
                </motion.div>

                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpring className='text-7xl text-green-500' />
                </motion.div>
                
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className='text-7xl text-blue-500' />
                </motion.div>
                
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className='text-7xl text-blue-500' />
                </motion.div>
                
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className='text-7xl text-orange-500' />
                </motion.div>
                
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDocker className='text-7xl text-blue-400' />
                </motion.div>
                
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className='text-7xl text-red-600' />
                </motion.div>
                
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className='text-7xl text-gray-800' />
                </motion.div>
                
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCSharp className='text-7xl text-blue-800' />
                </motion.div>
                
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiOutlineDotNet className='text-7xl text-purple-800' />
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb className='text-7xl text-green-500' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies