import React from 'react'
import AddPost from '../Post/AddPost'
import AllPost from '../Post/AllPost'

export default function CenterMenus() {
  return (
    <div className="flex flex-col gap-6">
      <AddPost />
      <AllPost />
    </div>
  )
}
