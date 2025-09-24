import Thisisme from "@/components/Thisisme";
import TechStack from "@/pages/stack";
import SkillsPieChart from "@/pages/ExperienceChart";
import Projects from "@/pages/projects";
import { motion } from "framer-motion";
import Humburger from "@/components/Humburger";
export default function Homepage() {
    return (
        
        <div className="md:ml-20   mx-5">
            <div className="max-w-lg">
            <Humburger/>
               
            <section className="mt-30 " >
                <h1 className="text-4xl md:text-7xl font-bold text-green-300 mb-5">
                    FULLSTACK <br/>
                    <span className="inline-block md:ml-6">DEVELOPER</span> <br/>
                    <span className="inline-block md:ml-30 ml-20 text-white">&</span> <br/>
                     
                    {""}
                <span className="text-white">SOC ANALYST</span>
                </h1>
            <p className="text-gray-300 text-xl">Hello! am <span className="text-white font-bold ">Siatah Deogracious. </span>A passionate software developer
                and tier-one SOC Analyst,dedicated in building future-proof and secure solutions.
            </p>
            </section>
            </div>
            {/* Call to Action Button */}
            <div className="mt-12">
                <button className="px-8 py-3 bg-green-500 text-white rounded-sm hover:bg-green-600 transition duration-300">
                    Hire Me
                </button>
            </div>

            {/* Fixed vertical email */}
            <div className="hidden md:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
                <p className=" rotate-90 origin-left tracking-widest text-gray-300">
                    <a href="mailto:deosiatah0@gmail.com" className="hover:text-green-300 transition">deosiatah0@gmail.com</a>
                </p>
            </div>
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9 }}// mimics back.inOut(2)
            viewport={{ once: false, amount: 0.5 }}
            className="mt-15 mx-5"
            >
            {/* stats section*/}
            <div className="flex flex-col md:hidden gap-6 mt-50 ">
                <div className="flex flex-row justify-center gap-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-300">2+</h2>
                    <p className="text-sm text-gray-300">Years of Experience</p>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-300">7+</h2>
                    <p className="text-sm text-gray-300">Projects Completed</p>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-300">5+</h2>
                    <p className="text-sm text-gray-300">Certifications Achieved</p>
                </div>
            </div>
            </div>
            </motion.div>

            {/* Desktop to allign vertically */}
            <div className="hidden md:flex flex-col gap-6 items-end pr-10 top-1/2 transform -translate-y-[100%]">
                <div className="text-right">
                    <h2 className="text-4xl font-bold text-green-300 ">2+</h2>
                    <p className="text-sm text-gray-300">Years of Experience</p>
                </div>
                <div className="text-right">
                    <h2 className="text-4xl font-bold text-green-300">7+</h2>
                    <p className="text-sm text-gray-300">Projects Completed</p>
                </div>
                <div className="text-right">
                    <h2 className="text-4xl font-bold text-green-300">5+</h2>
                    <p className="text-sm text-gray-300">Certifications Achieved</p>
                </div>
            </div>
            

            <Thisisme/>
            <TechStack/>
            <SkillsPieChart/>
            <Projects/>
        </div>

    )
}