import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Top Right */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-10 z-50 p-2  bg-opacity-40 hover:bg-opacity-60 rounded-md transition"
      >
        {open ? (
          <X className="text-white w-8 h-8 transition-transform duration-300" />
        ) : (
          <Menu className="text-white w-8 h-8 transition-transform duration-300" />
        )}
      </button>

      {/* Sidebar Panel - Right Side */}
      <div
        className={`fixed top-0 right-0 md:h-full md:w-1/3 w-full h-2/3 bg-neutral-700 z-40 transition-transform duration-[1200ms] ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="grid grid-cols-2 gap-8 mt-20 px-6 text-white text-lg items-start">
  {/* SOCIALS Section */}
  <div className="bg-gradient-to-br  p-6 rounded-lg shadow-md">
    <h3 className="text-gray-300 text-xl mb-4">SOCIALS</h3>
    <ul className="space-y-2">
      <li><a href="https://github.com/Deo-Siatah/" target='_blank' rel="noopener noreferrer" className="hover:text-green-400 transition" onClick={() =>setOpen(false)}>Github</a></li>
      <li><a href="https://www.linkedin.com/in/deo-siatah-325681320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer" className="hover:text-green-400 transition" onClick={() =>setOpen(false)}>LinkedIn</a></li>
      <li><a href="https://wa.me/254768659047" target='_blank' rel="noopener noreferrer" className="hover:text-green-400 transition" onClick={() =>setOpen(false)}>Whatsapp</a></li>
      <li><a href="https://www.tiktok.com/@codewithdeo?_t=ZM-904XqY887Qa&_r=1" target='_blank' rel="noopener noreferrer" className="hover:text-green-400 transition" onClick={() =>setOpen(false)}>Tiktok</a></li>
    </ul>
  </div>

  {/* MENU Section */}
  <div className="bg-gradient-to-br  p-6 rounded-lg shadow-md">
    <h3 className="text-gray-300 text-xl mb-4">MENU</h3>
    <ul className="space-y-2">
      <li><a href="#projects" 
      className="hover:text-green-400 transition"
      onClick={() => setOpen(false)}
      >🟣 Projects</a></li>
      <li><a href="#stack" 
      className="hover:text-green-400 transition"
      onClick={() => setOpen(false)}>🟢 Stack</a></li>
      <li><a href="#experience" 
      className="hover:text-green-400 transition"
      onClick={() =>setOpen(false)}
      >🔵 Experience</a></li>
      <li><a href="#contact" 
      className="hover:text-green-400 transition"
      onClick={() =>setOpen(false)}
      >🟡 Contact</a></li>
    </ul>
  </div>
</div>
        <div className='mt-20 flex flex-col justify-center items-center'>
        <h2 className='text-gray-300 '>GET IN TOUCH</h2> <br/>
         <p>
            <a href="mailto:deosiatah0@gmail.com" className="text-gray-300 hover:text-green-300 transition">deosiatah0@gmail.com</a>
        </p>

      </div>

      </div>
      
    </>
  );
}
