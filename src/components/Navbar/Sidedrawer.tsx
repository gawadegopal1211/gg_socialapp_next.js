"use client"

import Link from "next/link";
import { useState } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

export default function Sidedrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <div
                className="flex flex-col gap-[4.5px] cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={`w-6 h-1 bg-[#9146ff] rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-[#9146ff] rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-[#9146ff] rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
            </div>

            {isOpen && (
                <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] bg-[#9146ff] text-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
                    <Link href="/" className="flex items-center justify-start gap-2 w-28">
                        <FaHouseChimney />
                        <span>Home</span>
                    </Link>

                    {/*
                    <Link href="/friends" className="flex items-center justify-start gap-2 w-28">
                        <FaUserGroup />
                        <span>Friends</span>
                    </Link>
                    */}
                </div>
            )}
        </div>
    )
}
