"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showSecondaryNav, setShowSecondaryNav] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
                setShowSecondaryNav(true);
            } else {
                setIsSticky(false);
                setShowSecondaryNav(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // Nav items
    const navItems = [
        { link: "Internships List", path: "/internshiplist" },
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" }
    ];

    const secondaryNavItems = [
        { link: "Home", path: "/" },
        { link: "Internships", path: "/internshiplist" },
        { link: "Students", path: "/students" },
        { link: "Dashboard", path: "/dashboard" }
    ];

    return (
        <>  
            <header className={`fixed top-0 left-0 right-0 w-full ${isSticky ? "bg-gradient-to-r from-[#112d60] to-[#b6c0c5]" : "bg-gradient-to-r from-[#112d60] to-[#b6c0c5]"} bg-cover`}>
                <nav className="py-0 lg:px-14 px-2 flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className='flex items-center gap-2'>
                        <Link href="/" className='flex items-center gap-2'>
                            <div className="relative">
                                <img src="/images/logo.png" alt="Air University" className="w-16 h-16" />
                            </div>
                            <img src="/images/name.png" alt="Air University" className="w-30 h-30" />
                        </Link>
                    </div>

                    {/* Centered Title */}
                    <div className="flex-1 text-center">
                        <h1 className="text-white text-xl font-bold italic font-moonlight">
                            Internship Log
                        </h1>
                    </div>

                    {/* Nav items for large devices */}
                    <ul className='hidden space-x-8 md:flex'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <Link href={path} className='block text-sm text-white uppercase cursor-pointer hover:text-blue-900'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    {/* Button for lg devices */}
                    <div className='items-center hidden space-x-12 lg:flex'>
                        <button>
                            <FaBarsStaggered className='pl-2 h-6 w-6 text-white hover:text-blue-900' />
                        </button>
                    </div>

                    {/* Button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5 text-white' /> : <FaBarsStaggered
                                    className='w-5 h-5 text-white' />
                            }
                        </button>
                    </div>
                </nav>
            </header>

            {/* Secondary Navbar */}
            {showSecondaryNav && (
                <div className="fixed top-16 left-0 right-0 bg-[#b6c0c5] shadow-lg transform transition-transform duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-xl">
                    <nav className="py-2 px-4 flex items-center justify-center">
                        <ul className="flex space-x-8">
                            {
                                secondaryNavItems.map(({ link, path }) => (
                                    <li key={path}>
                                        <Link href={path} className='block text-sm text-gray-700 uppercase cursor-pointer hover:text-blue-500'>
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            )}

            {/* Nav items for small devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 ${isMenuOpen ? "block fixed top-0 right-0 left-0 bg-[#042444]" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => (
                        <li key={path}>
                            <Link href={path} className='block text-sm text-white uppercase cursor-pointer hover:text-blue-900'>
                                {link}
                            </Link>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar;
