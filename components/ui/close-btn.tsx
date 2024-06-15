"use client";

export const CloseButton = ({ close }: { close: any }) => (
    <button onClick={close} className="z-10">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <path d="M 3 16.5 L 17 2.5" />
            <path d="M 3 2.5 L 17 16.346" />
        </svg>
    </button>
);
