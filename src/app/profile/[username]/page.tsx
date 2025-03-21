import LeftMenus from '@/components/Home/LeftMenus'
import RightMenus from '@/components/Home/RightMenus'
import AllPost from '@/components/Post/AllPost'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Profile({ params }: {
  params: Promise<{ username: string }>
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

  const { userId: currentUserId } = await auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user?.id,
        blockedId: currentUserId
      }
    })

    if (res) {
      isBlocked = true;
    }
  }
  else {
    isBlocked = false
  }

  if (isBlocked) {
    return notFound();
  }

  console.log(user,'bebo')

  return (
    <div className="flex gap-6 p-4">
      <div className="hidden xl:block w-[20%]">
        <LeftMenus type='profile' />
      </div>
      <div className="w-full xl:w-[50%] lg:w-[70%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
            <Image
              src={user.avatar ? user.avatar : "https://hd.wallpaperswide.com/thumbs/a_cabin_by_the_lake_amidst_majestic_mountains-t2.jpg"}
              alt=""
              width={80}
              height={80}
              className="w-24 h-24 rounded-full ring-4 ring-[#9146ff] object-cover m-2"
            />

            <h1 className="m-2 text-2xl">
              {user.name && user.surname
                ? `${user.name} ${user.surname}`
                : user.username}
            </h1>

            <div className="flex items-center gap-2 m-2">
              <div className="flex flex-col items-center w-24">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center w-24">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center w-24">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>

          <AllPost username={user.username}/>
        </div>
      </div>
      <div className="hidden xl:block xl:w-[25%] lg:block w-[30%]">
        <RightMenus user={user}/>
      </div>
    </div>
  )
}
