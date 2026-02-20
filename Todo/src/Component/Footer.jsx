import React from 'react'

function Footer() {
  return (
    <>
      
    <footer className="bg-zinc-900 text-gray-400 mt-10 rounded-xl">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row  justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Todo App. Designed and Developed by Muhammad Naveel  All rights reserved.
        </p>

        {/* Right Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </footer>



    </>
  )
}

export default Footer
