import FollowUnfollow from '@/components/ProfileCard/Follow/FollowUnfollow';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: {
    params: Promise<{ username?: string }>
}) {

    const username = (await params).username;

    const user = await prisma.user.findFirst({
        where: {
            username,
        },
        include: {
            _count: {
                select: {
                    followers: true,
                    followings: true,
                    posts: true,
                },
            },
        },
    });

    if (!user) return notFound();

    const users = await prisma.user.findMany({})

    let isUserBlocked = false;
    let isFollowing = false;
    let isFollowingSent = false;

    const { userId: currentUserId } = await auth();

    if (currentUserId) {
        const res = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: user?.id,
            },
        });
        res ? (isUserBlocked = true) : (isUserBlocked = false);

        const resfollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user?.id,
            },
        });

        resfollow ? (isFollowing = true) : (isFollowing = false);

        const resfollowreq = await prisma.followRequest.findFirst({
            where: {
                senderId: currentUserId,
                receiverId: user?.id,
            },
        });

        resfollowreq ? (isFollowingSent = true) : (isFollowingSent = false);
    }

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-[#333333] text-md">
                        Users
                    </span>
                </div>

                <div className='flex flex-col gap-2'>
                    {users?.length !== 0 && users.filter((self) => self.id !== user.id).map((usersingle) => {
                        return (
                            <div className="flex flex-col md:flex-row items-center gap-4" key={usersingle.id}>
                                <Image
                                    src={usersingle.avatar || "/account-grey-icon.png"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-md">
                                    <Link href={`/profile/${usersingle.username}`}>
                                        {usersingle.name && usersingle.surname
                                            ? usersingle.name + " " + usersingle.surname
                                            : usersingle.username}
                                    </Link>
                                </span>

                                {user?.id && (
                                    <FollowUnfollow
                                        userId={user?.id}
                                        isUserBlocked={isUserBlocked}
                                        isFollowing={isFollowing}
                                        isFollowingSent={isFollowingSent}
                                        type={"users"}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
