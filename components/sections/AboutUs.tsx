import Image from 'next/image';

const AboutUs = () => {
    return ( 
        <>
        <section className="h-max w-full flex flex-col gap-5 px-4 sm:px-10 py-10">
            <h3 className="text-base text-primary font-bold">ABOUT US</h3>
            <h2 className="text-3xl text-accent font-bold">Your <span className="text-primary">Fitness Journey</span> Starts with Us</h2>
            <p className="text-accent/50 text-base">We are a results-driven fitness center dedicated to helping you achieve your health and wellness goals. With modern equipment, expert trainers, and a supportive environment, we make every workout count.</p>
            <div className="h-max w-full flex items-start sm:items-center gap-3">
                <div className="h-max w-max border-r border-accent/50 pr-3">
                    <h3 className="text-2xl font-bold text-accent">10<span className="text-primary">+</span></h3>
                    <p className="text-accent/50 text-xs sm:text-sm">Year of Excellences</p>
                </div>
                <div className="h-max w-max border-r border-accent/50 pr-3">
                    <h3 className="text-2xl font-bold text-accent">100<span className="text-primary">+</span></h3>
                    <p className="text-accent/50 text-xs sm:text-sm">Members</p>
                </div>
                <div className="h-max w-max border-r border-accent/50 pr-3">
                    <h3 className="text-2xl font-bold text-accent">10<span className="text-primary">+</span></h3>
                    <p className="text-accent/50 text-xs sm:text-sm">Weekly Classes</p>
                </div>
                <div className="h-max w-max">
                    <h3 className="text-2xl font-bold text-accent">10<span className="text-primary">+</span></h3>
                    <p className="text-accent/50 text-xs sm:text-sm">Expert Trainers</p>
                </div>
            </div>
            <div className="relative w-full h-70 sm:h-150">
                <Image src="/images/about.jpg" alt="about image" fill className="object-cover rounded" />
            </div>
        </section>
        </>
     );
}
 
export default AboutUs;