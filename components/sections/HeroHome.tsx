'use client';

import Header from '../Header';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeroHome = () => {

    const pathname = usePathname();

    return ( 
        <>
        <section className="hero">
            <header className={`relative z-10 h-20 w-full flex items-center justify-between px-10`}>
                <div className="h-max w-max">
                    <div className="text-3xl text-accent font-bold">APEX<span className="text-primary">GYM</span></div>
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
            <div className="h-[calc(100vh-80px)] w-full flex items-center justify-start px-10">
                <div className="h-max w-[60%] z-10 relative flex flex-col gap-5">
                    <h1 className="text-accent text-5xl font-bold">Push your Limits with us</h1>
                    <p className="text-accent text-base">From beginner to advanced, we have the perfect program for you.</p>
                    <div className="h-max w-full">
                        <button className="cursor-pointer py-2 px-5 rounded-full bg-primary text-accent font-bold text-base" type="button" title="Join Btn">Join Now <i className="fa-solid fa-angles-right ml-2"></i></button>
                    </div>
                    <div className="w-full h-max flex flex-col items-start justify-between gap-3 p-3">
                        <div className="h-max w-max flex">
                            <div className="h-max w-6">
                                <div className="relative h-10 w-10">
                                <Image src="/images/google1.jpg" alt="google image" fill className="object-cover rounded-full" />
                                </div>
                            </div>
                            <div className="h-max w-6">
                                <div className="relative h-10 w-10">
                                <Image src="/images/google2.jpg" alt="google image" fill className="object-cover rounded-full" />
                                </div>
                            </div>
                            <div className="h-max w-6">
                                <div className="relative h-10 w-10">
                                <Image src="/images/google3.jpg" alt="google image" fill className="object-cover rounded-full" />
                                </div>
                            </div>
                            <div className="h-max w-6">
                                <div className="relative h-10 w-10">
                                <Image src="/images/google4.jpg" alt="google image" fill className="object-cover rounded-full" />
                                </div>
                            </div>
                            <div className="h-max w-6">
                                <div className="relative h-10 w-10">
                                <Image src="/images/google5.jpg" alt="google image" fill className="object-cover rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="h-max w-full flex items-center gap-3">
                            <div className="relative h-10 w-10">
                                <Image src="/images/google.png" alt="google image" fill className="object-cover rounded-3xl" />
                            </div>
                            <div className="h-max w-max">
                                <p className="text-sm text-accent/50">Review best over 15k reviews</p>
                                <div className="h-max w-max text-yellow-500 flex items-center gap-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="h-max w-3/5 flex flex-wrap gap-3 mt-5">
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Personal Trainer</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Group Class</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Strength</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Cardio Equipment</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Workouts</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Body Compositions</span>
                            <span className="border border-accent/50 text-accent/50 text-xs py-2 px-3 rounded-full">Flexibility & Mobility</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default HeroHome;