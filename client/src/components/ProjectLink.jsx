import { SquareArrowOutUpRight } from 'lucide-react';
import {Link} from "react-router-dom"

export default function Projects({title,href}) {
    return (
        <div className='mb-8'>
        <Link 
        to={href}
        className="group relative inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 hover:from-green-300 hover:to-green-300 transition-all duration-900 text-5xl font-bold"
        style={{ fontFamily: 'Anton, sans-serif' }}
        >
            {title}
        <span className="ml-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500 text-gray-300">
            <SquareArrowOutUpRight className=''/>
        </span>
            
        </Link>
        <hr className="mt-2 border-gray-600"/>
        </div>
    )
}