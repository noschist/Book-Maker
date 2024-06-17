"use client";

import { BackgroundBeams } from "../ui/background-beams";
import LoginHeader from "../ui/login-header";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const logoVariants = {
    initial: {
        opacity: 0,
        scale: 2,
        y: 0,
    },
    animateFadeInAndShrink: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    animateMoveUp: {
        opacity: 1,
        scale: 0.7,
        y: -210,
        transition: {
            duration: 1.5,
        },
    },
};

export default function LoginScreen() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLogoAnimate(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const [logoanimate, setLogoAnimate] = useState(false);
    const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

    const handleLogoAnimationComplete = () => {
        setLogoAnimationComplete(true);
    };

    return (
        <div className="relative">
            <LoginHeader isAnimDone={logoAnimationComplete} />
            <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute">
                    <motion.h1
                        className="leading-[normal] select-none font-playnl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                        initial="initial"
                        animate={
                            logoanimate
                                ? "animateMoveUp"
                                : "animateFadeInAndShrink"
                        }
                        variants={logoVariants}
                        onAnimationComplete={handleLogoAnimationComplete}
                    >
                        Scriptly
                    </motion.h1>
                </div>
            </div>

            <div className="relative bg-gray-950 w-full h-screen flex items-center justify-center">
                <LoginForm isAnimDone={logoAnimationComplete} />
            </div>
            <BackgroundBeams />
        </div>
    );
}
