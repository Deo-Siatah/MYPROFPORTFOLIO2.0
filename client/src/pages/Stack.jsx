import { Fan } from "lucide-react";
import {motion} from "framer-motion"
import pythonLogo from "@/assets/python.svg";
import htmlLogo from "@/assets/html.svg";
import cssLogo from "@/assets/css.svg";
import jsLogo from "@/assets/javascript.svg";
import tailwind from "@/assets/tailwind.svg";
import reactLogo from "@/assets/react.svg";
import nodejsLogo from "@/assets/nodejs.svg";
import expressLogo from "@/assets/expressjs.svg";
import mongodbLogo from "@/assets/mongodb.svg";
import mysqlLogo from "@/assets/mysql.svg";
import gitLogo from "@/assets/git.svg";
import githubLogo from "@/assets/github.svg";
import postman from "@/assets/postman.svg";
import mongoose from "@/assets/mongoose.svg";
export default function TechStack() {
    return (
        <div id="stack" >
            <h2 className="flex items-center gap-4 text-white text-2xl ">
                <Fan className="text-white w-8 h-8 animate-spin"
                style={{animationDuration: '3s'}}
                />
                MY STACK
            </h2>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.9 }}// mimics back.inOut(2)
                viewport={{ once: false, amount: 0.5 }}
                className="mt-15 mx-5"
            >
            {/*Main Layout */}
            <div className="mt-6 flex flex-col  md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col gap-20">
              <h1 style={{ fontFamily: 'Anton, sans-serif' }} className="text-5xl text-gray-400">FRONTEND</h1>
            </div>
            <div className="w-full md:w-2/3  grid grid-cols-3  gap-6 md:pl-47">
            {/*Logo items */}
            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={htmlLogo} alt="HTML" className="w-10 h-10"/>
                HTML
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={cssLogo} alt="Javascript" className="w-10 h-10"/>
                CSS
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={jsLogo} alt="HTML" className="w-10 h-10"/>
                JavaScript
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl ">
                <img src={tailwind} alt="tailwindcss" className="w-10 h-10"/>
                Tailwind
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={reactLogo} alt="react" className="w-10 h-10"/>
                React
            </div>

            </div>
        
            </div> 
            
            {/*Backend section */}
            <div className="mt-10 flex flex-col  md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col gap-20">
              <h1 style={{ fontFamily: 'Anton, sans-serif' }} className="text-5xl text-gray-400">BACKEND</h1>
            </div>  
            <div className="w-full md:w-2/3  grid grid-cols-3  gap-6 md:pl-47">
            {/*Logo items */}
            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={pythonLogo} alt="Python" className="w-10 h-10"/>
                Python
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={nodejsLogo} alt="nodejs" className="w-10 h-10"/>
                NodeJs
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={expressLogo} alt="ExpressJs" className="w-10 h-10"/>
                ExpressJs
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={mongoose} alt="mongoose" className="w-10 h-10"/>
                Mongoose
            </div>
            </div>
            </div>

            {/*Database section */}
           
            <div className="mt-10 flex flex-col  md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col gap-20">
              <h1 style={{ fontFamily: 'Anton, sans-serif' }} className="text-5xl text-gray-400">DATABASE</h1>
            </div>  
            <div className="w-full md:w-2/3  grid grid-cols-3  gap-6 md:pl-47">
            {/*Logo items */}
            <div className="flex items-center gap-4 text-white text-2xl">
                <img src={mongodbLogo} alt="mongodb" className="w-10 h-10"/>
                MongoDB
            </div>

            <div className="flex items-center gap-4 text-white text-2xl">
                <img src={mysqlLogo} alt="mysql" className="w-10 h-10"/>
                MySQL
            </div>
            </div>
            </div>

            {/*Tools section */}
            <div className="mt-10 flex flex-col  md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col gap-20">
              <h1 style={{ fontFamily: 'Anton, sans-serif' }} className="text-5xl text-gray-400">TOOLS</h1>
            </div>  
            <div className="w-full md:w-2/3  grid grid-cols-3  gap-6 md:pl-47">
            {/*Logo items */}
            <div className="flex items-center gap-4 text-white text-2xl">
                <img src={gitLogo} alt="Git" className="w-10 h-10"/>
                Git
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={githubLogo} alt="mysql" className="w-10 h-10"/>
                Github
            </div>

            <div className="flex items-center gap-4 text-white md:text-2xl">
                <img src={postman} alt="postman" className="w-10 h-10"/>
                Postman
            </div>
            </div>
            </div>
             </motion.div>
             
        </div> 
    )
}