import React from 'react'
import { FaInfoCircle } from "react-icons/fa"

export default function Announcement() {
    return (
        <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4 mb-4">
            <div className="flex items-center justify-between text-[#333333] font-medium">
                <span>Announcement</span>

                <FaInfoCircle className='text-[#9146ff] text-lg' />
            </div>

            <p className='text-xs'>
                Hello, this is an ongoing project built with Next.js, React, TypeScript, HTML, CSS,Tailwind CSS and Prisma.
                It's a learning project for me as I'm getting to grips with Next.js, and I'll finish it up soon.
            </p>
        </div>
    )
}
