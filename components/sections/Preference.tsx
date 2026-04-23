'use client';

import Image from 'next/image';

const Preference = () => {

    const seeDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btnClick = e.currentTarget;
        const btnIcon = btnClick.children[0];
        const cardClicked = btnClick.parentElement!.parentElement;

        if (btnIcon.classList.contains("fa-chevron-down")){
            btnIcon.classList.remove("fa-chevron-down");
            btnIcon.classList.add("fa-chevron-up");
            btnIcon.classList.add("text-primary");
        }else{
            btnIcon.classList.add("fa-chevron-down");
            btnIcon.classList.remove("fa-chevron-up");
            btnIcon.classList.remove("text-primary");
        }

        if (cardClicked!.children[1].classList.contains("hidden")){
            cardClicked!.children[1].classList.remove("hidden");
        }else{
            cardClicked!.children[1].classList.add("hidden");
        }
    }

    return ( 
        <>
        <section className="h-max w-full flex flex-col gap-5 px-10 py-10">
            <h3 className="text-base text-primary font-bold">PREFERENCE</h3>
            <h2 className="text-3xl text-accent font-bold">Why Choose Us for Your <span className="text-primary">Fitness</span> Journey?</h2>
            <div className="h-max w-full flex gap-5 items-start">
                <div className="relative h-100 w-full">
                    <Image src="/images/preference2.jpg" alt="why image" fill className="object-cover rounded" />
                </div>
                <div className="h-100 w-full flex flex-col gap-5">
                    <div className="h-max w-full px-10 py-5 bg-foreground rounded">
                        <div className="h-max w-full flex items-center justify-between">
                            <h3 className="text-primary text-xl font-semi-bold">State-of-the-art <span className="text-accent">Equipment</span></h3>
                            <button onClick={seeDetails} className="h-max w-max cursor-pointer" type="button" title="dropdown">
                                <i className="fa-solid fa-chevron-down text-accent transform transition duration-500"></i>
                            </button>
                        </div>
                        <div className="h-max w-full mt-5 hidden transform transition duration-500">
                            <p className="text-sm text-accent/70">Our facility is equipped with the latest fitness machines and tools to ensure efficient workouts, improved performance, and a comfortable training experience.</p>
                        </div>
                    </div>
                    <div className="h-max w-full px-10 py-5 bg-foreground rounded">
                        <div className="h-max w-full flex items-center justify-between">
                            <h3 className="text-primary text-xl font-semi-bold">Expert <span className="text-accent">Trainer</span></h3>
                            <button onClick={seeDetails} className="h-max w-max cursor-pointer" type="button" title="dropdown">
                                <i className="fa-solid fa-chevron-down text-accent transform transition duration-500"></i>
                            </button>
                        </div>
                        <div className="h-max w-full mt-5 hidden transform transition duration-500">
                            <p className="text-sm text-accent/70">Train with experienced professionals dedicated to helping you achieve your fitness goals safely and effectively.</p>
                        </div>
                    </div>
                    <div className="h-max w-full px-10 py-5 bg-foreground rounded">
                        <div className="h-max w-full flex items-center justify-between">
                            <h3 className="text-primary text-xl font-semi-bold">Wide Range of <span className="text-accent">Classes</span></h3>
                            <button onClick={seeDetails} className="h-max w-max cursor-pointer" type="button" title="dropdown">
                                <i className="fa-solid fa-chevron-down text-accent transform transition duration-500"></i>
                            </button>
                        </div>
                        <div className="h-max w-full mt-5 hidden transform transition duration-500">
                            <p className="text-sm text-accent/70">Choose from a variety of classes designed to suit every fitness level, from strength training and cardio to group sessions that keep you motivated.</p>
                        </div>
                    </div>
                    <div className="h-max w-full px-10 py-5 bg-foreground rounded">
                        <div className="h-max w-full flex items-center justify-between">
                            <h3 className="text-primary text-xl font-semi-bold">Welcoming <span className="text-accent">Community</span></h3>
                            <button onClick={seeDetails} className="h-max w-max cursor-pointer" type="button" title="dropdown">
                                <i className="fa-solid fa-chevron-down text-accent transform transition duration-500"></i>
                            </button>
                        </div>
                        <div className="h-max w-full mt-5 hidden transform transition duration-500">
                            <p className="text-sm text-accent/70">Be part of a supportive and friendly environment where everyone is motivated to grow, improve, and achieve their fitness goals together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Preference;