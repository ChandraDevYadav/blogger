import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';
import Notification from './Notification';
import { FaX } from 'react-icons/fa6';

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [closeTimer, setCloseTimer] = useState(null);

  const links = [
    { name: "Home", path: "/home" },
    { name: "Pages", dropdown: ["about", "Contact", "Gallery"] },
    { name: "Lifestyle", path: "/lifestyle" },
    { name: "Foods", path: "/foods" },
    { name: "Business", path: "/bussiness" },
    { name: "Travel", path: "/travel" },
    { name: "Post", path: "/posts" },
    // {
    //   name: "Post",
    //   dropdown: [
    //     { name: "Latest Posts", submenu: ["Recent News", "Updates", "Highlights"] },
    //     "Popular Posts",
    //     "Featured Posts",
    //   ],
    // },
  ];

  const handleMouseEnter = (linkName) => {
    clearTimeout(closeTimer);
    setDropdownOpen(linkName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setDropdownOpen(null), 200);
    setCloseTimer(timer);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-t z-50 bg-white sticky top-0">
      <div className="flex justify-start items-center text-2xl gap-2 font-bold text-gray-800">
        <img src="/blog.png" alt="" className="w-10 h-10" />
        <p>Bloggar</p>
      </div>

      <div className="hidden md:flex">
        {links.map((link) => (
          <div
            key={link.name}
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link
              to={link.path || "/"}
              className={`text-gray-700 text-lg font-medium hover:text-gray-900 pb-1 px-5 transition-all hover:border-t-4 hover:border-blue-500 pt-[17px] ${
                activeLink === link.name.toLowerCase() ? "border-t-4 border-blue-500 pt-[21px]" : ""
              }`}
              onClick={() => setActiveLink(link.name.toLowerCase())}
            >
              {link.name}
            </Link>

            {link.dropdown && dropdownOpen === link.name && (
              <div className="absolute left-0 mt-5 w-48 bg-white shadow-lg rounded z-50">
                {link.dropdown.map((item) => (
                  <div
                    key={item.name || item}
                    onMouseEnter={() => item.submenu && setSubDropdownOpen(item.name)}
                    onMouseLeave={() => setSubDropdownOpen(null)}
                    className="relative"
                  >
                    <Link
                      to={`/${(item.name || item).toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.name || item}
                    </Link>

                    {item.submenu && subDropdownOpen === item.name && (
                      <div className="absolute top-0 left-full mt-0 w-40 bg-white shadow-lg rounded z-20">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/${subItem.toLowerCase().replace(" ", "-")}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaSearch
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 text-xl cursor-pointer hover:text-gray-900"
          />
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-10 -right-10 bg-white border border-gray-300 p-2 rounded shadow-lg"
              onBlur={() => setIsSearchOpen(false)}
            />
          )}
        </div>

        <GoBell
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-700 text-xl cursor-pointer hover:text-gray-900"
        />

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 cursor-pointer hover:text-gray-900"
            />
          ) : (
            <FaBars
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 cursor-pointer hover:text-gray-900"
            />
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 md:hidden">
          <div className="flex flex-col items-center space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path || "/"}
                className={`block text-gray-700 hover:text-gray-900 pb-1 transition-all ${
                  activeLink === link.name.toLowerCase() ? "border-t-2 border-blue-500" : ""
                }`}
                onClick={() => {
                  setActiveLink(link.name.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isSidebarOpen && (
        <div className="fixed right-0 top-0 w-96 h-full bg-[#292932] shadow-lg">
          <div className='flex justify-end'>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="mt-6 mr-4 bg-[#333333] text-white px-3 py-3 rounded"
          >
            <FaX/>
          </button>
          </div>
          <Notification/>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
