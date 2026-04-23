'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {

    const pathname = usePathname();

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    }

    return(
        <>
        <header className={`relative z-10 h-20 w-full flex sm:px-10
            ${pathname === "/" ? "hidden" : "items-center justify-between"}
            ${openNav ? "fixed h-screen top-0 left-0 px-0" : "px-4 items-center justify-between"}
            `}>
            <div className={`"h-max w-max
                    ${openNav ? "hidden" : ""}
                    `}>
                <div className="text-xl sm:text-3xl text-accent font-bold">GREATHONEY<span className="text-primary">2</span>FITNESS</div>
            </div>
            <div className={`sm:w-max flex items-center gap-40
                    ${openNav ? "flex-col w-4/5 bg-background h-screen" : "h-max hidden sm:flex"}
                    `}>
                <ul className={`h-max sm:flex gap-5
                        ${openNav ? "flex flex-col w-full items-start  p-5" : "items-center hidden w-max"}
                        `}>
                    <li className="h-max w-max flex flex-col gap-0.5">
                        <Link href="/" className={`font-semi-bold
                            ${pathname === "/" ? "text-primary" : "text-accent"}
                            `}>Home</Link>
                        <span className={`h-0.5 w-full
                            ${pathname === "/" ? "bg-primary" : ""}
                            `}></span>
                    </li>
                    <li className="h-max w-max flex flex-col gap-0.5">
                        <Link href="/services" className={`font-semi-bold
                            ${pathname === "/services" ? "text-primary" : "text-accent"}
                            `}>Services</Link>
                        <span className={`h-0.5 w-full
                            ${pathname === "/services" ? "bg-primary" : ""}
                            `}></span>
                    </li>
                    <li className="h-max w-max flex flex-col gap-0.5">
                        <Link href="/about-us" className={`font-semi-bold
                            ${pathname === "/about-us" ? "text-primary" : "text-accent"}
                            `}>About Us</Link>
                        <span className={`h-0.5 w-full
                            ${pathname === "/about-us" ? "bg-primary" : ""}
                            `}></span>
                    </li>
                    <li className="h-max w-max flex flex-col gap-0.5">
                        <Link href="/contact-us" className={`font-semi-bold
                            ${pathname === "/contact-us" ? "text-primary" : "text-accent"}
                            `}>Contact Us</Link>
                        <span className={`h-0.5 w-full
                            ${pathname === "/contact-us" ? "bg-primary" : ""}
                            `}></span>
                    </li>
                </ul>
                <div className={`${openNav ? "w-full h-max flex px-5" : ""}`}>
                    <button className={`cursor-pointer py-2 px-5 rounded-full bg-primary text-accent font-bold text-base
                        ${openNav ? "w-full" : ""}
                        `}>Free Trial</button>
                </div>
            </div>
            <div onClick={toggleNav} className={`${openNav ? "w-1/5 h-screen bg-background/50" : "hidden"}`}></div>
            <div onClick={toggleNav} className={`ham-container h-10 w-10 block sm:hidden
                    ${openNav ? "hidden" : ""}
                    `}>
                <div className="hamburger"></div>
            </div>
        </header>            
        </>
    );
}

export default Header;