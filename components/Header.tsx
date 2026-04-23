'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname();

    return(
        <>
        <header className={`relative z-10 h-20 w-full flex items-center justify-between px-10
            ${pathname === "/" ? "hidden" : ""}
            `}>
            <div className="h-max w-max">
                <div className="text-3xl text-accent font-bold">GREATHONEY<span className="text-primary">2</span>FITNESS</div>
            </div>
            <div className="h-max w-max flex items-center gap-40">
                <ul className="h-max w-max flex items-center gap-5">
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
                <div className="">
                    <button className="cursor-pointer py-2 px-5 rounded-full bg-primary text-accent font-bold text-base">Free Trial</button>
                </div>
            </div>
        </header>            
        </>
    );
}

export default Header;