"use client";

import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='h-[86vh] w-full flex flex-col items-center justify-center gap-4'>
            <h2 className='text-2xl font-bold'>PAGE NOT FOUND</h2>

            <h3>
                Sorry! we couldn't find the page you're looking for.
            </h3>

            <Link href={'/'}>
                <button className='cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm transform transition duration-250 hover:scale-105 transform transition duration-250 hover:scale-105'>
                    Go Back
                </button>
            </Link>
        </div>
    )
}

export default NotFound
