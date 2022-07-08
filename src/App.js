import { useState, useEffect } from "react";
import { Creations, Hero, Footer, Loading } from "./components/index";
import {
    creationsDataDesk,
    creationsDataMob,
    navItems,
} from "./constants/index";
import { Logo, interactiveImgDesk, interactiveImgMob } from "./assets/index";

import "./index.css";

export default function App() {
    // window width
    const [isDesktop, setDesktop] = useState();
    const updateMedia = () => {
        setDesktop(window.innerWidth < 650);
    };

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", updateMedia);
            return () => setDesktop(window.innerWidth > 1440);
        }, 1000);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            {loading === false ? (
                <div>
                    <Hero navItems={navItems} isDesktop={isDesktop} />
                    <section className="mt-32 w-96 mx-auto md:flex relative md:mb-52 md:w-[800px] md:h-[300px] ">
                        {isDesktop ? (
                            <img src={interactiveImgMob} alt="" />
                        ) : (
                            <img src={interactiveImgDesk} alt="" className="" />
                        )}
                        <div className="text-center md:text-left mt-16 bg-white md:absolute md:left-[350px] md:top-[50px]   md:w-[500px] md:p-20 ">
                            <h1 className="text-4xl font-thin uppercase mb-6">
                                The leader in interactive VR
                            </h1>
                            <p className="text-xl font-bold opacity-80 w-80 mx-auto md:w-full md:text-sm">
                                Founded in 2011, Loopstudios has been producing
                                world-class virtual reality projects for some of
                                the best companies around the globe. Our
                                award-winning creations have transformed
                                businesses through digital experiences that bind
                                to their brand.
                            </p>
                        </div>
                    </section>
                    <Creations
                        creationsDataDesk={creationsDataDesk}
                        creationsDataMob={creationsDataMob}
                        isDesktop={isDesktop}
                    />
                    <Footer navItems={navItems} />
                </div>
            ) : (
                <Loading Logo={Logo} />
            )}
        </>
    );
}
