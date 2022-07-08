import {
    Logo,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    PinterestIcon,
} from "../assets/index";

export default function Footer(props) {
    return (
        <footer className="bg-black flex flex-col md:flex-row justify-center md:justify-between items-center h-fit md:h-44 md:px-48">
            <nav className="flex flex-col md:items-start items-center  ">
                <a
                    href="/"
                    className="cursor-pointer z-10 mb-16 md:mb-8 mt-20 md:mt-0"
                >
                    <Logo />
                </a>
                <ul className="flex flex-col md:flex-row items-center ">
                    {props.navItems.map((item, index) => {
                        return (
                            <a href="#" key={index}>
                                <li
                                    className="text-white text-2xl mb-6 font-bold  cursor-pointer
md:text-sm md:mb-0 md:capitalize md:font-bold  md:duration-300 mr-8"
                                >
                                    {item.item}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </nav>
            <div className="flex text-center flex-col items-center md:items-end mt-12 md:mt-0 mb-20 md:mb-0  ">
                <ul className="social-icons flex justify-center items-center">
                    <li className="mr-4">
                        <a href="#">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="mr-4">
                        <a href="#">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li className="mr-4">
                        <a href="#">
                            <PinterestIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                    </li>
                </ul>
                <p className="text-white font-bold opacity-75 md:opacity-50 text-2xl md:text-sm mt-8">
                    &#169; 2021 Loopstudios. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
