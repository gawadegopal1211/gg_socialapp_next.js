"use client";

import { useOptimistic, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { likePost } from "@/lib/action";
import Image from "next/image";

const PostInteraction = ({
    postId,
    likes,
    commentNumber,
}: {
    postId: number;
    likes: string[];
    commentNumber: number;
}) => {
    const { isLoaded, userId } = useAuth();
    const [likeState, setLikeState] = useState({ likeCount: likes.length, isLiked: userId ? likes.includes(userId) : false });

    const [optimistic, setOptimistic] = useOptimistic(
        likeState,
        (state, value) => {
            return {
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked,
            };
        }
    );

    const likeAction = async () => {
        setOptimistic("");
        try {
            likePost(postId);
            setLikeState((state) => ({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked,
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center text-sm gap-2">
            <div className="flex items-center gap-2 bg-[#f0f0ff] p-2 rounded-xl">
                <form action={likeAction} className="flex items-center">
                    <button>
                        <Image
                            src={"/red-heart-icon.png"}
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                    </button>
                </form>

                <span className="text-gray-300">|</span>

                <span className="text-[#333333]">
                    {optimistic.likeCount}
                    <span className="hidden md:inline">{" "}Like(s)</span>
                </span>
            </div>

            <div className="flex items-center gap-2 bg-[#f0f0ff] p-2 rounded-xl">
                <Image
                    src="/instagram-comment-icon.png"
                    width={16}
                    height={16}
                    alt=""
                    className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>

                <span className="text-[#333333]">
                    {commentNumber}<span className="hidden md:inline">{" "}Comment(s)</span>
                </span>
            </div>
        </div>
    );
};

export default PostInteraction;
