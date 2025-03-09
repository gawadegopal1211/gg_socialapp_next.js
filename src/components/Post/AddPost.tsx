"use client";

import React, { useState } from 'react'
import { addPost } from '@/lib/action';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import { useFormStatus } from 'react-dom';
import { CldUploadWidget } from "next-cloudinary";

export default function AddPost() {
    const { user, isLoaded } = useUser();
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState<any>();
    const { pending } = useFormStatus();

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='p-4 bg-white rounded-xl shadow-lg text-md gap-2'>
            <div>
                <form action={(formData) => addPost(formData, img?.secure_url || "")}>
                    <div className="flex items-start justify-between gap-4">
                        <Image
                            src={user?.imageUrl || "/account-grey-icon.png"}
                            alt=""
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-full"
                        />

                        <div className='flex-1'>
                            <textarea
                                placeholder="What's on your mind?"
                                className="bg-[#f0f0ff] rounded-lg p-2 w-full"
                                name="desc"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="w-full flex items-center justify-between gap-4 mt-4 text-[#333333] flex-wrap">
                        <CldUploadWidget
                            uploadPreset="ggsocial"
                            onSuccess={(result, { widget }) => {
                                setImg(result.info);
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <div
                                        className="flex items-center gap-2 mx-3 cursor-pointer"
                                        onClick={() => open()}
                                    >
                                        <Image src="/add-image-photo-icon.png" alt="" width={30} height={30} />
                                        Photo
                                    </div>
                                );
                            }}
                        </CldUploadWidget>

                        <button className='cursor-pointer text-center bg-[#9146ff] text-white p-1.5 rounded-lg text-sm'>
                            {pending ? "Sending" : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
