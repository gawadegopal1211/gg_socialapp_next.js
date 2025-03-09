import React from 'react'
import { User } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import ProfileInfo from '../ProfileCard/ProfileInfo';
import ProfileMedia from '../ProfileCard/ProfileMedia';

export default async function RightMenus({ user }: {
    user?: User
}) {
    const { userId } = await auth();

    const requests = await prisma.followRequest.findMany({
        where: {
            receiverId: userId || undefined,
        },
        include: {
            sender: true,
        },
    });

    return (
        <div>
            {user ?
                <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4 mb-4">
                    <ProfileInfo user={user} />
                </div> :
                null
            }

            {user ?
                <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4 mb-4">
                    <ProfileMedia user={user} />
                </div> :
                null
            }
        </div>
    )
}
