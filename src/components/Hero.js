import { useState } from "react";
import {
    Logo,
    imgHeroDesk,
    imgHeroMob,
    HamburgerIcon,
    CloseIcon,
} from "../assets/index";

export default function Hero(props) {
    const [loadMenuIcon, setLoadMenuIcon] = useState(true);
    return (
        <div className=" w-full h-screen relative flex justify-center items-center">
            {props.isDesktop ? (
                <img
                    src={imgHeroMob}
                    alt=""
                    className="h-screen w-full object-fill"
                />
            ) : (
                <img
                    src={imgHeroDesk}
                    alt=""
                    className="h-screen w-full object-fill"
                />
            )}

            <nav className="absolute top-0 lef-0 py-6 w-full md:w-10/12 flex items-center justify-between px-10 mx-auto   md:px-6 z-20">
                <a href="/" className="cursor-pointer z-10">
                    <Logo />
                </a>
                <div
                    className={`cursor-pointer z-10  ${
                        props.isDesktop ? "" : "hidden"
                    }`}
                    onClick={() => {
                        setLoadMenuIcon(!loadMenuIcon);
                    }}
                >
                    {loadMenuIcon ? <HamburgerIcon /> : <CloseIcon />}
                </div>
                <ul
                    className={`${
                        loadMenuIcon
                            ? "hidden opacity-0"
                            : "opacity-100 w-full h-screen bg-black"
                    } absolute top-0 left-0 flex flex-col justify-center md:opacity-100 md:flex md:flex-row md:static `}
                >
                    {props.navItems.map((item, index) => {
                        return (
                            <a href="#" key={index}>
                                <li className="text-white text-4xl uppercase mb-8 cursor-pointer ml-10 md:text-sm md:mb-0 md:capitalize md:font-bold  md:duration-300">
                                    {item.item}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </nav>

            <h1
                className="hero-text z-10 text-white text-5xl lg:text-6xl uppercase outline outline-white lg:w-1/3 p-6 lg:left-0 lg:top-72
             lg:translate-x-40 "
            >
                Immersive Experiences that Deliver
            </h1>
        </div>
    );
}
