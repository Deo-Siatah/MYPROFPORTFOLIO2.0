
import { SquareArrowOutUpRight } from 'lucide-react';
export default function Projectpagecontainer({
    title,
    year,
    image,
    techniques,
    description,
    features,
    role,

}) {
    return (
        <div className="mt-15 flex flex-col justify-center items-center">
            {/*Title*/}
            <h1 className="group relative inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 text-5xl font-bold"   style={{ fontFamily: 'Anton, sans-serif' }}>
                {title}
                <span className="ml-4 opacity-100  text-gray-300">
                    <SquareArrowOutUpRight/>
                </span>
            </h1>

        {/*Year*/}
        <p mt-2 text-gray-300 text-lg font-semibold>{year}</p>

        {/*Description*/}
        <p className="mt-6 text-center text-gray-300 max-w-3xl">{description}</p>

        {/*Key Features*/}
        <div>
            <h3 className='text-xl text-gray-300 mb-4'>Key Features</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
                {features.map((feature,index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>

        {/*Technical Highlights*/}
        <div className="mt-8 w-full" >
            <h3 className="text-xl text-gray-300 mb-4">Technical Highlights</h3>
            <ul className='space-y-2 list-disc list-inside text-gray-300'>
                {techniques.map((tech,index) => (
                    <li key={index}>{tech}</li>
    
                ))}
            </ul>
        </div>

        {/*Role*/}
        <div className='mt-8 w-full'>
            <h3 className='text-xl text-green-400 mb-4'>My Role</h3>
            <p className='text-gray-300'>{role}</p>
        </div>
        {/*Image*/}
        {image && (
            <div className='mt-6 w-full rounded-lg overflow-hidden shadow-sm'>
                <img src={image} alt={`${title} preview`} className='w-full object-cover'/>
            </div>
        )}
        </div>
    )
}