const Plans = () => {
    return ( 
        <>
        <section className="h-max w-full flex flex-col gap-5 px-4 sm:px-10 py-10 bg-foreground">
            <h3 className="text-base text-primary font-bold">PAYMENT OPTIONS</h3>
            <h2 className="text-3xl text-accent font-bold">Flexible <span className="text-primary">Payment Options</span> for Everyone.</h2>
            <p className="text-center text-accent"><span className="text-primary font-bold">Registration Fee: ₦3,000</span> — One-time payment to get started</p>
            <div className="h-max w-full flex flex-col sm:flex-row items-center justify-between gap-5 pt-5">
                <div className="h-max w-full sm:w-[30%] bg-background rounded-xl p-5">
                    <h3 className="text-xl text-center text-accent mb-5 font-bold">Daily Plan</h3>
                    <div className="h-max w-full flex items-end mb-5 gap-1">
                        <h3 className="text-xl text-accent font-bold">₦1000</h3>
                        <span className="text-sm text-accent/50">/day</span>
                    </div>
                    <p className="text-sm text-accent/50 mb-5">Perfect for Beginners & Flexible Users</p>
                    <h4 className="text-sm text-accent/50 mb-5">What you get</h4>
                    <div className="h-max w-full flex flex-col gap-2 mb-5">
                        <div className="h-max w-full flex items-center gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Access to gym Equipment</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Morning & Evening Session</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Coach Support</p>
                        </div>
                    </div>
                    <button className="py-2 px-2 w-full bg-foreground rounded text-center text-accent text-base cursor-pointer" type="button" title="plan button">Get Started</button>
                </div>
                <div className="h-max w-full sm:w-[30%] bg-background rounded-xl p-5">
                    <h3 className="text-xl text-center text-accent mb-5 font-bold">Weekly Plan</h3>
                    <div className="h-max w-full flex items-end mb-5 gap-1">
                        <h3 className="text-xl text-accent font-bold">₦6000</h3>
                        <span className="text-sm text-accent/50">/week</span>
                    </div>
                    <p className="text-sm text-accent/50 mb-5">Great for consistent training</p>
                    <h4 className="text-sm text-accent/50 mb-5">What you get</h4>
                    <div className="h-max w-full flex flex-col gap-2 mb-5">
                        <div className="h-max w-full flex items-center gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Access to gym Equipment</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Morning & Evening Session</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Coach Support</p>
                        </div>
                    </div>
                    <button className="py-2 px-2 w-full bg-foreground rounded text-center text-accent text-base cursor-pointer" type="button" title="plan button">Get Started</button>
                </div>
                <div className="choosen h-max w-full sm:w-[30%] bg-background rounded-xl p-5">
                    <h3 className="relative z-10 text-xl text-center text-accent mb-5 font-bold">Monthly Plan</h3>
                    <div className="relative z-10 h-max w-full flex items-end mb-5 gap-1">
                        <h3 className="text-xl text-accent font-bold">₦10,000</h3>
                        <span className="text-sm text-accent/50">/month</span>
                    </div>
                    <p className="relative z-10 text-sm text-accent/50 mb-5">Best value for serious result</p>
                    <h4 className="relative z-10 text-sm text-accent/50 mb-5">What you get</h4>
                    <div className="relative z-10 h-max w-full flex flex-col gap-2 mb-5">
                        <div className="h-max w-full flex items-center gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Access to gym Equipment</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Morning & Evening Session</p>
                        </div>
                        <div className="h-max w-full items-center flex gap-2">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <p className="text-accent text-sm">Coach Support</p>
                        </div>
                    </div>
                    <button className="relative z-10 py-2 px-2 w-full bg-primary/50 rounded text-center text-accent text-base cursor-pointer" type="button" title="plan button">Get Started</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Plans;