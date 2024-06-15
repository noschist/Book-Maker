"use client";

import { CloseButton } from "./close-btn";
import { invoke } from "@tauri-apps/api/tauri";

export default function LoginHeader() {
    return (
        <div className="w-full h-10 bg-transparent fixed top-0 left-0 z-10">
            <CloseButton close={() => invoke("close_login_window")} />
        </div>
    );
}
