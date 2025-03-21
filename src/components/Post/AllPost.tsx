import React from 'react';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import Post from './Post';

export default async function AllPost({ username }: {
    username?: string
}) {
    const { userId } = await auth();

    console.log(userId, 'kareena')

    let posts: any[] = [];

    if (username) {
        posts = await prisma.post.findMany({
            where: {
                user: {
                    username: username,
                },
            },
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    if (!username && userId) {
        const following = await prisma.follower.findMany({
            where: {
                followerId: userId,
            },
            select: {
                followingId: true,
            },
        });

        const followingIds = following.map((f) => f.followingId);
        const ids = [userId, ...followingIds]

        posts = await prisma.post.findMany({
            where: {
                userId: {
                    in: ids,
                },
            },
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        comments: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    console.log(posts,'kareena')

    return (
        <div className='p-4 bg-white rounded-xl shadow-lg text-md flex flex-col gap-8'>
            {posts.length ? (posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))) :
                <h1>No posts found!</h1>
            }
        </div>
    )
}
