import React, { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ListViewIcon } from '@hugeicons/core-free-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-red-600 p-2 flex justify-between items-center sticky top-0 z-50 sm:justify-start gap-60'>
      <Link to='/' className='font-bold text-2xl'>Navbar</Link>

      {/* Nav Links (hidden on small screens, visible from sm and up) */}
      <div className='hidden sm:flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/feacture">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/markAttendence">Mark Attendance</Link>
        <Link to="/e-book">e-Book</Link>
        <Link to="/quiz">Quiz</Link>
      </div>

      {/* Hamburger Icon (visible only on small screens) */}
      <div className='sm:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <HugeiconsIcon icon={ListViewIcon} className="w-7 h-7 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`absolute top-full left-0 w-full bg-red-600 flex flex-wrap items-start gap-4 p-4 sm:hidden 
          transform transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">About</Link>
        <Link to="/markAttendence">Mark Attendance</Link>
        <Link to="/e-book">e-Book</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </div>
  )
}

export default Navbar
