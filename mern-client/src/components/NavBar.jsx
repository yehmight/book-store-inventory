import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

// React Icons
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contexts/AuthProvider';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const {user} = useContext(AuthContext);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell Your Book', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' },
  ];

  return (
    // <header className={isSticky ? 'sticky top-0 left-0 right-0 z-50 bg-white shadow-md w-full bg-transparent transition-all ease-in duration-300  ' : ''}>
    //   <nav className= "flex items-center justify-between p-4 py-4 lg:px-24">
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
    <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" :""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
          <FaBlog className="inline-block" /> Books
        </Link>

        {/* Nav items for large devices */}
        <ul className="md:flex space-x-12 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button for large devices */}
        <div className="space-x-12 hidden lg:flex items-center">
          <button>
            <FaBarsStaggered className="w-5 hover:text-blue-700" />
          </button>
        </div>

        {/* Menu button for mobile devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
           
           {/* to display the user email */}
            {/* {
              user? user.email : ""
            } */}
          </button>
          </div>
        </div>
      </nav>

      {/* Nav items for small devices */}
      <div
        className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
          isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
        }`}
      >
        <ul className="list-none">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
                onClick={toggleMenu} // Close menu on link click
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
  