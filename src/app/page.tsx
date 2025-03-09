import LeftMenus from "@/components/Home/LeftMenus";

export default function Home() {
  return (
    <div className="flex gap-6 p-4">
      <div className="hidden xl:block w-[20%]">
        <LeftMenus type="home" />
      </div>
      <div className="w-full xl:w-[50%] lg:w-[70%]">
        <div className="flex flex-col gap-6">
        </div>
      </div>
      <div className="hidden xl:block xl:w-[25%] lg:block w-[30%]">
      </div>
    </div>
  )
}
