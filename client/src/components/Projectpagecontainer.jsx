
import { SquareArrowOutUpRight,ArrowLeft } from 'lucide-react';
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import Humburger from "@/components/Humburger";
export default function Projectpagecontainer({
    title,
    year,
    image,
    techniques,
    description,
    features,
    roles,
    liveLink,
    githubLink

}) {
    return (

         
        <div className=" flex flex-col justify-center items-center m-6 ">

            <Humburger/>
            <div className=' fixed top-4 left-10 lg:left-15 z-50 p-2'>
                <Link 
                className='text-white flex flex-row items-center gap-2 text-xl hover:text-green-300'
                to="/"
                >
                   <ArrowLeft />
                   Back
                </Link>
            </div>
            <div className='lg:mx-auto lg:px-30'>
            {/*Title*/}
            <h1 className="group relative inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 text-5xl font-bold mt-25"   style={{ fontFamily: 'Anton, sans-serif' }}>
                {title}
                <span className="ml-4 opacity-100  text-gray-300">
                    <SquareArrowOutUpRight/>
                </span>
            </h1>

        {/*Year*/}
        <h1 className='text-gray-400  text-2xl mt-8' style={{ fontFamily: 'Anton, sans-serif' }} >Year</h1>
        <p className="mt-4 text-gray-300 text-lg font-semibold">{year}</p>


        {/*Description*/}
        <h1 className='text-gray-400  text-2xl mt-4' style={{ fontFamily: 'Anton, sans-serif' }} >Description</h1>
        <p className="mt-4 text-center text-white max-w-3xl text-xl">{description}</p>

        {/*Key Features*/}
        <div>
            <h3 className='text-2xl text-gray-400 mb-4 mt-4' style={{ fontFamily: 'Anton, sans-serif' }}>Key Features</h3>
            <ul className="space-y-2 list-inside text-white text-xl">
                {features.map((feature,index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>

        {/*Technical Highlights*/}
        <div className="mt-8  " >
            <h3 className="text-2xl text-gray-400 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>Technical Highlights</h3>
            <ul className='space-y-2 list-disc list-inside text-white text-xl'>
                {techniques.map((tech,index) => (
                    <li key={index}>{tech}</li>
    
                ))}
            </ul>
        </div>

        {/*Role*/}
        <div className='mt-8'>
            <h1 className='text-gray-400  text-2xl mt-8 mb-4' style={{ fontFamily: 'Anton, sans-serif' }} >My Role</h1>
            <ul className='space-y-2  list-inside text-white text-xl'>
                {roles.map((role,index) => (
                    <li key={index}>{role}</li>
    
                ))}
            </ul>
            
        </div>
        {/*Image*/}
        <div className='flex flex-col justify-center items-start'>
        {image && (
            <div className='mt-6  rounded-lg overflow-hidden shadow-sm w-full max-w-3xl  mb-4'>
                <img src={image} alt={`${title} preview`} className=' w-full h-auto object-cover'/>
            </div>
        )}
        </div>
        </div>

        <div className='flex flex-row items-center gap-20 mt-8'>
            {liveLink && (
            <Link
                to={liveLink}
                target='_blank'
                className='flex flex-row items-center gap-2 text-white hover:text-green-300'
            >
                  Live Link
                <SquareArrowOutUpRight/>
              
            </Link>
            )}
            
            <div className=' '>
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <p className='flex flex-row items-center gap-2 text-white text-lg'> Github
                    <FaGithub className="text-white text-4xl hover:text-blue-400 transition"/>
                    </p>
                </a>
                )}
                
            </div>
        </div>
        </div>
        
    )
}