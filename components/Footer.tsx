'use client';

import Link from 'next/link';

const Footer = () => {
    return ( 
        <>
        <footer className="h-max w-full bg-foreground px-4 sm:px-10 py-10">
            <div className="h-max w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="h-max w-full sm:w-max flex flex-col justify-center items-center gap-5">
                    <div className="h-max w-max">
                        <div className="text-xl sm:text-3xl text-accent font-bold">GREATHONEY<span className="text-primary">2</span>FITNESS</div>
                    </div>
                    <div className="h-max w-max">
                        <ul className="hmax w-max flex items-center gap-4">
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="facebook icon">
                                    <i className="fa-brands fa-facebook text-2xl text-primary"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="instagram icon">
                                    <i className="fa-brands fa-instagram text-2xl text-primary"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="twitter icon">
                                    <i className="fa-brands fa-twitter text-2xl text-primary"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="linkedin icon">
                                    <i className="fa-brands fa-linkedin text-2xl text-primary"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-max w-full sm:w-max my-5 sm:my-0">
                    <ul className="h-max w-full sm:w-max flex items-center justify-center sm:items-start gap-3 sm:gap-10">
                        <li className="text-accent text-base hover:text-primary transition-colors duration-300">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className="text-accent text-base hover:text-primary transition-colors duration-300">
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li className="text-accent text-base hover:text-primary transition-colors duration-300">
                            <Link href={"/about-us"}>About Us</Link>
                        </li>
                        <li className="text-accent text-base hover:text-primary transition-colors duration-300">
                            <Link href={"/contact-us"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="h-max w-full sm:w-max mb-5 sm:mb-0">
                    <form action="/" onSubmit={(e) => e.preventDefault()} className="w-full sm:w-max">
                        <h2 className="text-xl text-center sm:text-start font-bold text-accent mb-3">Subscribe to our newsletter</h2>
                        <div className="h-max">
                            <input type="email" placeholder="Enter your email" className="w-full text-accent px-4 py-2 rounded-md border border-grey text-sm" required />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="w-full bg-primary text-accent cursor-pointer px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="h-max w-full">
                <p className="text-center text-accent/50 text-sm">
                    &copy; {new Date().getFullYear()} GreatHoney2Fitness. All rights reserved.
                </p>
                <div className="w-full h-max flex items-center justify-center mt-5 text-sm text-accent/50 gap-3">
                    <Link href={"/terms-of-use"}>Terms of Use</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link href={"/legal"}>Legal</Link>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;