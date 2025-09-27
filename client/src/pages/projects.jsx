import ProjectLink from "@/components/ProjectLink";
import { Fan } from "lucide-react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
export default function Projects() {
    return (
        <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.9 }}// mimics back.inOut(2)
                viewport={{ once: false, amount: 0.5 }}
                className="mt-15 mx-5"
         >
        <div className=" md:mt-20" id="projects">
            <h2 className="flex items-center gap-4 text-white text-2xl mb-8 ">
                <Fan className="text-white w-8 h-8 animate-spin"
                style={{animationDuration: '3s'}}
                />
                SELECTED PROJECTS
            </h2>
            <div  >
            <ProjectLink title="NANA CARE" href="/pages/NanaCare"  />
            <ProjectLink title="DEADTIME" href="/pages/Deadtime" />
            <ProjectLink title="LANGO AI" href="#" />
        </div>
        </div>
        
    </motion.div>
    )
}