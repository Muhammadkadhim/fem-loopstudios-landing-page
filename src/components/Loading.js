import { Logo } from "../assets/index";

export default function Loading(props) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-800 h-screen">
            <Logo />
            <div className="loading-line"></div>
        </div>
    );
}
