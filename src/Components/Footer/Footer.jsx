
import React from 'react'

import logoImg from "../../assets/Logo-Light.svg"
import { Link } from 'react-router';
import Contact from './Contact';
function Footer() {
  return (
    <footer className="bg-purple-200 border-y border-purple-300 ">
            <div className="mx-auto w-full max-w-screen-xl  py-4 lg:py-8 ">
                <div className="md:flex md:justify-between" >
                    <div className="mb-8 sm:mb-0  ">
                        <Link to="/" className="flex items-center ">
                            <img
                                src={logoImg}
                                className="sm:mr-2 mx-auto h-50"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <Contact color="bg-purple-200"/>
                    <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:gap-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-purple-950 uppercase">Resources</h2>
                            <ul className="text-purple-800 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume" className="hover:underline">
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-purple-950 uppercase">Follow</h2>
                            <ul className="text-purple-800 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/anjleeduseja"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link 
                                    to="https://www.linkedin.com/in/anjlee-duseja-2a12aa1a0/" 
                                    target='_blank'
                                    className="hover:underline">
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="sm:flex sm:items-center sm:justify-between mb-1 px-7">
                    <span className="text-sm text-purple-700 sm:text-center">
                        © 2025
                        <a href="/" className="hover:underline">
                             AnjleeDuseja
                        </a>
                         All Rights Reserved.
                    </span>
                    
                </div>
        </footer>
  )
}

export default Footer
