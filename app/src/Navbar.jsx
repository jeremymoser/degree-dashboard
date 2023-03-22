import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/images/pbsc-logo.png'

const Navbar = () =>
   (
    <>
        <nav className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between flex-wrap pt-2 pl-6 pb-2 pr-6 bg-pbsc-offwhite">
            <div className="flex items-center center mr-6 mb-3 md:mb-0 order-last md:order-first">
                <FontAwesomeIcon icon={ faGaugeHigh } className="fa-regular fa-gauge-high text-pbsc-gold text-2xl md:text-4xl mr-3" />
                <span className="font-semibold text-2xl md:text-4xl text-pbsc-darkgreen">Degree Dashboard</span> <span className="text-xs md:text-sm py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-pbsc-blue rounded hidden md:inline-block">v3.0</span>
            </div>
            <div className="w-100 flex justify-between items-center flex-wrap pbsc-logo order-first md:order-last">
                <img src={logo} alt=" PBSC Logo " className="text-center" />
            </div>
        </nav>
    </>
  )

export default Navbar