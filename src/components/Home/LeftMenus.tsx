import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

export default function LeftMenus({ type }: {
    type: "home" | "profile"
}) {
    return (
        <div className='flex flex-col gap-4'>
            {type === "home" ?
                <ProfileCard /> :
                null
            }
        </div>
    )
}
