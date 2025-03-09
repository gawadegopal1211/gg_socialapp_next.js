import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileCard() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image
                    src={"https://hd.wallpaperswide.com/thumbs/serene_lake_green_pasture_and_majestic_mountain_view-t2.jpg"}
                    alt=""
                    fill
                    className="rounded-md object-cover"
                />
                <Image
                    src={"https://hd.wallpaperswide.com/thumbs/serene_lake_green_pasture_and_majestic_mountain_view-t2.jpg"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-4 ring-2 ring-white z-10"
                />
            </div>

            <div className="flex flex-col gap-2 items-center">
                <span className="text-lg">
                    abc
                </span>

                <span className="text-xs text-[#333333]">
                    0 Followers
                </span>

                <Link href={`/profile/${'text'}`}>
                    <button className='cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm'>
                        My Profile
                    </button>
                </Link>
            </div>
        </div>
    )
}
