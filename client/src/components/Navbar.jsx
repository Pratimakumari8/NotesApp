import React , {useState} from 'react';
import {Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNotesAppContext } from '../context/NotesAppContextProvider';
const Navbar = () => {
  const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const{user, setUser, setShowUserLogin, navigate } = useNotesAppContext();
  const logout = async()=>{
    setUser(null);
    navigate('/')
  }
  return (
    <nav className='h-[60px] relative w-full px-6 md:p-16 lg:px-24 xl:px-32 flex items-center justify-between z-20
     bg-[#FFDBDB] text-[#644A07] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] transition-all  border-b-4 border-[#644A07]'>
      <Link to="/" className="flex items-center gap-2 ">
  <img className="h-9" src={assets.logo} alt="logo" />
  <span className="font-bold text-xl text-[#644A07]">NotesApp</span>
   </Link>
     <ul className="md:flex hidden items-center gap-10">
        <li><Link className="hover:text-[#594100] active:scale-130 focus:text-[#594100]  transition-all" to="/">Home</Link></li>
        <li><Link className="hover:text-[#594100] active:scale-130 focus:text-[#594100]  transition-all" to="/notes">Notes</Link></li>
      </ul>

      {/* Get Started Button (optional) */}
      {!user ? (
  <button
    onClick={() => setShowUserLogin(true)}
    className="bg-[#FFC6C6] text-[#644A07] border border-[#644A07] cursor-pointer md:inline hidden text-sm hover:bg-[#ffdbdb] active:scale-95 transition-all w-40 h-11 rounded-full"
  >
    Get Started
  </button>
) : (
  <div className="relative group hidden md:block">
    <img src={assets.profileicon} className="w-20 h-20 cursor-pointer" alt="profile" />
    <ul className="hidden group-hover:block absolute top-12 right-0 bg-[#FFDBDB] border border-[#644A07] py-2 w-36 rounded-md text-sm shadow-md z-50">
      <li
        onClick={() => navigate('/notes')}
        className="p-2 pl-4 hover:bg-[#FFC6C6] cursor-pointer"
      >
        My Notes
      </li>
      <li
        onClick={logout}
        className="p-2 pl-4 hover:bg-[#FFC6C6] cursor-pointer"
      >
        Logout
      </li>
    </ul>
  </div>
)}

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#644A07">
          <path d="M3 7h24M3 14h24M3 21h24" stroke="#644A07" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-[#FFDBDB] p-6 md:hidden flex flex-col items-center space-y-4">
          <Link className="text-[#644A07] text-lg" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link className="text-[#644A07] text-lg" to="/notes" onClick={() => setIsMobileMenuOpen(false)}>Notes</Link>
          <Link className="text-[#644A07] text-lg" to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          <Link className="text-[#644A07] text-lg" to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>

          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <button type="button" className="bg-[#FFC6C6] text-[#644A07] border border-[#644A07] mt-6 text-sm hover:bg-[#ffdbdb] active:scale-95 transition-all w-40 h-11 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar