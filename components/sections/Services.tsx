import Image from "next/image";

const Services = () => {
    return ( 
        <>
        <section className="h-max w-full flex flex-col gap-5 px-10 py-10 bg-background/50">
            <h3 className="text-base text-primary font-bold">OUR SERVICES</h3>
            <h2 className="text-3xl text-accent font-bold">Unlease Your Potential <span className="text-primary">Premium Fitness Service</span> Designed Specifically for you.</h2>
            <div className="h-max w-full flex justify-between items-center">
                <p className="text-accent/50 text-base">Train in a motivating environment with modern equipment and expert guidance tailored to your goals. Whether you're building strength, losing weight, or improving endurance, we’re here to help you achieve real, lasting results.</p>
                <div className="h-max w-2/5 flex justify-end items-center gap-5">
                    <button type="button" className="h-7 w-15 text-accent text-sm cursor-pointer flex items-center justify-center rounded-full bg-primary">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button type="button" className="h-7 w-15 text-accent text-sm cursor-pointer flex items-center justify-center rounded-full bg-primary">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="h-max w-full overflow-x-hidden">
                <div className="h-60 w-max flex items-center gap-5">
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service1.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Personal Trainer</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service2.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Group Class</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service3.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Strength</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service5.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Cardio Equipment</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service6.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Workout</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                    <a href="#" target="_blank" className="group dark-bg relative p-4 h-50 w-50 transform transition duration-500 hover:scale-105 flex items-end">
                        <div className="absolute top-0 left-0 h-full w-full">
                            <Image src="/images/service7.jpg" fill alt="card image" className="object-cover rounded-xl" />
                        </div>
                        <div className="w-full h-max relative z-5 flex justify-between items-center text-sm">
                            <p className="group-hover:text-accent transform transition duration-500 text-accent/50 font-bold text-sm">Fexibility & Monility</p>
                            <i class="fa-solid fa-up-right-from-square text-accent/50 group-hover:text-primary transform transition duration-500"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Services;