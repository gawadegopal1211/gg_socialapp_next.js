import CenterMenus from "@/components/Home/CenterMenus";
import LeftMenus from "@/components/Home/LeftMenus";
import RightMenus from "@/components/Home/RightMenus";

export default function Home() {
  return (
    <div className="flex gap-6 p-4">
      <div className="hidden xl:block w-[20%]">
        <LeftMenus type="home" />
      </div>
      <div className="w-full xl:w-[50%] lg:w-[70%]">
        <CenterMenus />
      </div>
      <div className="hidden xl:block xl:w-[25%] lg:block w-[30%]">
        <RightMenus />
      </div>
    </div>
  )
}
