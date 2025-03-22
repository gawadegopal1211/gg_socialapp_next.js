import CenterMenus from "@/components/Home/CenterMenus";
import LeftMenus from "@/components/Home/LeftMenus";
import RightMenus from "@/components/Home/RightMenus";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="w-full lg:w-[20%]">
        <LeftMenus type="home" />
      </div>
      <div className="w-full xl:w-[50%] lg:w-[70%]">
        <CenterMenus />
      </div>
      <div className="w-full xl:w-[25%] lg:w-[30%]">
        <RightMenus />
      </div>
    </div>
  )
}
