import {FaGithub,FaLinkedin,FaWhatsapp,FaTiktok} from "react-icons/fa";

export default function Footersection () {
    return (
        <div className="flex flex-col justify-center items-center mt-20" id="contact">
            <div>
                <p className="text-gray-200 text-lg ml-10">Have a project in mind ?</p>
                <p className="  text-white  text-4xl mt-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                    <a href="mailto:deosiatah0@gmail.com" className="hover:underline transition duration-200">deosiatah0@gmail.com</a>
                </p>
            </div>
            <div className="grid grid-cols-5 gap-6 mt-8 mb-4">
                <a href="https://github.com/Deo-Siatah/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-4xl hover:text-blue-400 transition"/>
                </a>
                <a href="https://www.linkedin.com/in/deo-siatah-325681320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-4xl hover:text-blue-400 transition"/>
                </a>
                <a href="https://wa.me/254768659047" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-white text-4xl hover:text-green-300 transition"/>
                </a>
                <a href="https://www.tiktok.com/@codewithdeo?_t=ZM-904XqY887Qa&_r=1" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="text-white text-4xl hover:text-green-300 transition"/>
                </a>
            </div>
            <p className="text-sm text-gray-300 mt-4 mb-8">Designed & built by Deo Siatah</p>
        </div>
    );
}

