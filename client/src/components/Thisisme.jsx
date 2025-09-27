import { motion } from "framer-motion";

export default function Thisisme() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9 }}// mimics back.inOut(2)
      viewport={{ once: false, amount: 0.5 }}
      className="mt-15 mx-5"
    >
      <h2 className="text-gray-100">This is me</h2>
      <hr className="mt-2 border-gray-600" />
      <div className="md:flex flex-row gap-6 mt-8 mb-40">
        <div className="flex-1">
          <h2 className="text-gray-100 mt-4 md:text-5xl">Hello am Siatah.</h2>
        </div>
        <div className="flex-1 text-gray-300 mt-4 md:text-lg">
          <p> Motivated and purpose-driven Full Stack Developer currently pursuing a B.Sc. in Computer Science at Maasai Mara
          University. Graduate of the Power Learn Project Africa, with hands-on experience in the MERN stack and AI
          integrations. <br />
            Passionate about building secure, scalable, and impactful digital solutions. Currently exploring
            cybersecurity as a Tier-1 SOC Analyst, aiming to develop secure-by-design systems and defend against modern
            threats.
          </p>
        </div>
      </div>
    </motion.div>
  );
}




