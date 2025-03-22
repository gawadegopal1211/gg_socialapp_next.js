import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInfoCircle } from "react-icons/fa"

export default function AdOrInstructions() {
    return (
        <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4 mb-4">
            <div className="flex items-center justify-between text-[#333333] font-medium">
                <span>Advertisement</span>

                <FaInfoCircle className='text-[#9146ff] text-lg'/>
            </div>

            <div className="flex justify-center items-center mt-1 gap-2 rounded-lg overflow-hidden">
                <Image
                    src="/pexels-goumbik-574073.jpg"
                    alt=""
                    width={320}
                    height={100}
                    className="rounded-lg object-cover origin-top-left transform transition duration-250 hover:scale-105"
                />
            </div>

            <span className="text-[#9146ff] font-medium">
                <Link href={"https://www.pexels.com/photo/turned-on-laptop-computer-574073/"}>
                    Photo by Lukas
                </Link>
            </span>
        </div>
    )
}
