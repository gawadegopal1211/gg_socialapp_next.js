"use client"
import { updateProfile } from '@/lib/action';
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation';
import React, { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom';

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
                className="text-blue-500 text-xs cursor-pointer"
                onClick={() => setOpen(true)}
            >
                Update
            </span>
            {open && (
                <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
                    <form
                        action={(formData) =>
                            formAction({ formData, cover: cover?.secure_url || "" })
                        }
                        className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
                    >
                        {/* TITLE */}
                        <h1>Update Profile</h1>
                        <div className="mt-4 text-xs text-gray-500">
                            Use the navbar profile to change the avatar or username.
                        </div>
                        {/* COVER PIC UPLOAD */}

                        {/* WRAPPER */}
                        <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                            {/* INPUT */}
                            <div className="flex flex-col gap-4">
                                <label htmlFor="" className="text-xs text-gray-500">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.name || "John"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="name"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label htmlFor="" className="text-xs text-gray-500">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.surname || "Doe"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="surname"
                                />
                            </div>
                            {/* INPUT */}
                            <div className="flex flex-col gap-4">
                                <label htmlFor="" className="text-xs text-gray-500">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.description || "Life is beautiful..."}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="description"
                                />
                            </div>
                            {/* INPUT */}
                            <div className="flex flex-col gap-4">
                                <label htmlFor="" className="text-xs text-gray-500">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.city || "New York"}
                                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                                    name="city"
                                />
                            </div>
                            {/* INPUT */}
                        </div>
                        <button
                            className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-opacity-50 disabled:cursor-not-allowed"
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
                        <div
                            className="absolute text-xl right-2 top-3 cursor-pointer"
                            onClick={handleClose}
                        >
                            X
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}
