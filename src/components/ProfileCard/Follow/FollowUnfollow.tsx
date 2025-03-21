'use client';

import React, { useOptimistic, useState } from 'react';
import { blockFunc, followFunc } from '@/lib/action';

export default function FollowUnfollow({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent,
    type
}: {
    userId: string | undefined;
    isUserBlocked: boolean;
    isFollowing: boolean;
    isFollowingSent: boolean;
    type?: string
}) {
    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent,
    });

    const follow = async () => {
        setOptimisticState("follow");
        try {
            await followFunc(userId);
            setUserState((prev) => ({
                ...prev,
                following: prev.following && false,
                followingRequestSent:
                    !prev.following && !prev.followingRequestSent ? true : false,
            }));
        } catch (err) {
            console.log(err)
        }
    };

    const block = async () => {
        setOptimisticState("block");
        try {
            await blockFunc(userId);
            setUserState((prev) => ({
                ...prev,
                blocked: !prev.blocked,
            }));
        } catch (err) {
            console.log(err)
        }
    };

    const [optimisticState, setOptimisticState] = useOptimistic(
        userState,
        (state, value: "follow" | "block") =>
            value === "follow" ?
                { ...state, following: state.following && false, followingRequestSent: !state.following && !state.followingRequestSent ? true : false } :
                { ...state, blocked: !state.blocked }
    );

    return (
        <div className={`flex ${type === "users" ? "items-center w-full justify-between" : "flex-col"} gap-2`}>
            <form action={follow}>
                {optimisticState.blocked ?
                    null :
                    <button className="w-full cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm transform transition duration-250 hover:scale-105">
                        {optimisticState.following ?
                            "Following" : optimisticState.followingRequestSent ?
                                "Friend Request Sent" :
                                "Follow"
                        }
                    </button>
                }
            </form>

            <form action={block} className="self-end">
                <button className="text-red-400 text-xs cursor-pointer mr-1">
                    {optimisticState.blocked ?
                        "Unblock User" :
                        "Block User"
                    }
                </button>
            </form>
        </div>
    )
}
