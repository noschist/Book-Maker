"use client";

import { motion } from "framer-motion";
import { CloseButton } from "./close-btn";
import { invoke } from "@tauri-apps/api/tauri";

export default function LoginHeader({ isAnimDone }: { isAnimDone: boolean }) {
    return (
        isAnimDone && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                data-tauri-drag-region="true"
                className="w-full h-10 bg-transparent fixed top-0 left-0 z-10 flex p-4 items-center justify-between select-none"
            >
                <p data-tauri-drag-region="true" className=" font-quicksand">
                    Lock Screen
                </p>
                <CloseButton close={() => invoke("close_login_window")} />
            </motion.div>
        )
    );
}
