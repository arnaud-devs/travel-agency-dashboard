import { Outlet } from "react-router"
import { Navitems ,MobileSidebar } from "components"
const AdminLayout = () => {
  return (
    <div className="md:flex w-full bg-[#F9FBFC] ">
      <MobileSidebar/>
      <aside className="w-full max-w-[270px] hidden px-[2%] border h-[100vh] lg:block md:flex md:justify-center pt-10 pb-2 border-[#ECF2EF]">
        <Navitems/>
      </aside>
      <aside className="w-full">
        <Outlet></Outlet>
      </aside>
    </div>
  )
}

export default AdminLayout