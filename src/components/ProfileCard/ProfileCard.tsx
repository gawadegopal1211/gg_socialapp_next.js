import React from 'react'
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image'
import Link from 'next/link'

export default async function ProfileCard({ type }: {
    type: "home" | "profile"
}) {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const user = await prisma.user.findFirst({
        where: {
            id: userId
        },
        include: {
            _count: {
                select: {
                    followers: true
                }
            }
        }
    })

    if (!user) {
        return null;
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image
                    src={user.cover ? user.cover : "/farm-color-icon.png"}
                    alt=""
                    fill
                    className="rounded-md object-cover object-center"
                />
                <Image
                    src={user.avatar ? user.avatar : "/account-grey-icon.png"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-4 ring-2 ring-white z-10"
                />
            </div>

            <div className="flex flex-col gap-2 items-center">
                <span className="text-lg">
                    {user.name && user.surname
                        ? `${user.name} ${user.surname}`
                        : user.username}
                </span>

                <span className="text-xs text-[#333333]">
                    {user._count.followers} Followers
                </span>

                {type === "home" ?
                    <Link href={`/profile/${user.username}`}>
                        <button className='cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm'>
                            My Profile
                        </button>
                    </Link> :
                    null
                }

                <Link href={`/peoples/${user.username}`}>
                    <button className='cursor-pointer text-center bg-[#f0f0ff] text-[#9146ff] p-1.5 rounded-lg text-sm'>
                        Connect with friends
                    </button>
                </Link>
            </div>
        </div>
    )
}
