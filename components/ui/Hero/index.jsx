import NavLink from "../NavLink";
import ani from "./ww.json";
import Lottie from "lottie-react";

const Hero = () => (
    <section className="min-h-[85vh] bg-gradient flex flex-col">
        <div className="h-1/6"> 
            <Lottie animationData={ani} loop={true} className="opacity-15" />
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-600"> 
            <div className="space-y-5 max-w-4xl mx-auto text-center content sm:align-middle">
                <h1 className="text-gray-800 font-extrabold mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl capitalize">
                    Empowering Your Vision with Rapid, Reliable Solutions
                </h1>
                <p className="max-w-xl mx-auto">Your Success, Our Commitment</p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                    >
                        Inquire Now
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
