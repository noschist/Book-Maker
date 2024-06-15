import { BackgroundBeams } from "../ui/background-beams";
import LoginHeader from "../ui/login-header";
import LoginForm from "./LoginForm";

export default function LoginScreen() {
    return (
        <div>
            <LoginHeader />
            <div className="relative bg-gray-950 w-full h-screen flex flex-col items-center justify-center">
                <h1 className="relative z-10 leading-[normal] select-none font-playnl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Scriptly
                </h1>
                <LoginForm />
                <BackgroundBeams />
            </div>
        </div>
    );
}
