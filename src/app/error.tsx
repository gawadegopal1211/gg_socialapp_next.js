"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export default function error() {
    const router = useRouter();

    return (
        <div className='h-[86vh] w-full flex flex-col items-center justify-center gap-4'>
            <Image
                alt=''
                width={40}
                height={40}
                className='bg-white rounded-full p-2 transform transition duration-250 hover:scale-105'
                src={'/info-circle-line-icon.png'}
            />

            <h2 className='text-2xl font-bold'>
                There was a problem with the Server
            </h2>

            <button
                onClick={() => router.refresh()}
                className='cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm transform transition duration-250 hover:scale-105'
            >
                Refresh
            </button>
        </div>
    )
}
