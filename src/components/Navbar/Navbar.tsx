import React from 'react'
import { Lilita_One } from "next/font/google"
import Link from 'next/link'
import { FaHouseChimney } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Sidedrawer from './Sidedrawer';

const lilita = Lilita_One({
    weight: '400',
})

export default function Navbar() {
    return (
        <div className="h-20 flex items-center justify-between">
            {/*Heading*/}
            <div className={lilita.className} >
                <Link href="/" className="font-bold text-2xl text-[#9146ff]">
                    GG SOCIAL
                </Link>
            </div>

            {/*Center Menus*/}
            <div className="w-[50%] hidden md:flex text-sm items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Link href="/" className="flex items-center justify-start gap-1">
                        <FaHouseChimney />
                        <span>Home</span>
                    </Link>
                    
                    <Link href="/friends" className="flex items-center justify-start gap-1">
                        <FaUserGroup />
                        <span>Friends</span>
                    </Link>
                </div>
            </div>

            {/*Right Menus*/}
            <div className="w-[30%] flex items-center gap-4 xl:gap-6 justify-end">
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#9146ff] border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>

                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <Link href="/sign-in" className="flex items-center justify-start gap-1">
                        <MdAccountCircle className="text-2xl text-[#9146ff]" />
                        <span>Login/Register</span>
                    </Link>
                </SignedOut>
            </div>

            {/*Side Drawer*/}
            <Sidedrawer />
        </div>
    )
}
