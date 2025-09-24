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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore doloremque aliquam provident ullam impedit atque facere laboriosam consequuntur quia ratione qui inventore, similique eos, vitae animi fugiat. Vitae, a! <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, molestias! Ipsum, ipsa. Corrupti, rerum. Aperiam provident neque, enim quis voluptate repudiandae, vitae quas error laborum, delectus laboriosam voluptatum eos quae!
          </p>
        </div>
      </div>
    </motion.div>
  );
}




