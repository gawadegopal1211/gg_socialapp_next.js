"use client"
import { updateProfile } from '@/lib/action';
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom';
import { MdOutlineCancel } from "react-icons/md";

export default function UpdateProfile({ user }: {
    user: User
}) {
    const [open, setOpen] = useState(false);
    const [cover, setCover] = useState<any>(false);

    const [state, formAction] = useActionState(updateProfile, { success: false, error: false });

    const router = useRouter();

    const handleClose = () => {
        setOpen(false);
        state.success && router.refresh()
    };

    const { pending } = useFormStatus();

    return (
        <div className="">
            <span
                className="text-[#9146ff] text-xs cursor-pointer"
                onClick={() => setOpen(true)}
            >
                Update
            </span>
            {open && (
                <div className="absolute w-screen h-screen top-0 left-0 bg-[#9146ff] bg-opacity-65 flex items-center justify-center z-50">
                    <form
                        action={(formData) => formAction({ formData, cover: cover?.secure_url || "" })}
                        className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
                    >
                        <h1 className='text-2xl'>Update Profile</h1>
                        <div className="mt-2 text-xs text-[#333333]">
                            Use the navbar profile to change the avatar or username.
                        </div>

                        <CldUploadWidget
                            uploadPreset="ggsocial"
                            onSuccess={(result) => setCover(result.info)}
                        >
                            {({ open }) => {
                                return (
                                    <div
                                        className="flex flex-col gap-4 my-4"
                                        onClick={() => open()}
                                    >
                                        <label htmlFor="">Cover Picture</label>
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <Image
                                                src={user.cover || "/person-silhouette-white-icon.png"}
                                                alt=""
                                                width={60}
                                                height={60}
                                                className="w-12 h-8 rounded-full object-cover bg-[#9146ff]"
                                            />
                                            <span className="text-md underline text-[#333333]">
                                                Change
                                            </span>
                                        </div>
                                    </div>
                                );
                            }}
                        </CldUploadWidget>


                        <div className="flex flex-wrap justify-between gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-md text-[#333333]">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder={user.name || "John"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-md text-[#333333]">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.surname || "Doe"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="surname"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-md text-[#333333]">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.description || "Available"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="description"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-md text-[#333333]">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.city || "New York"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="city"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-[#9146ff] cursor-pointer p-2 mt-2 rounded-md text-white disabled:bg-opacity-50 disabled:cursor-not-allowed"
                            disabled={pending}
                        >
                            {pending ? "Updating..." : "Update"}
                        </button>
                        {state.success && (
                            <span className="text-green-500">Profile has been updated!</span>
                        )}
                        {state.error && (
                            <span className="text-red-500">Something went wrong!</span>
                        )}
                        <MdOutlineCancel
                            className="absolute text-lg right-2 top-3 cursor-pointer"
                            onClick={handleClose}
                        />
                    </form>
                </div>
            )}
        </div>
    )
}
