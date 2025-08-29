import { Link } from "react-router"
const MobileSidebar = () => {
  return (
    <div className=" flex wrapper md:hidden justify-between items-center px-[2%] py-[10px]">
      
      <header className="flex space-x-4">
        <Link to='/'>
        <img src="../assets/icons/logo.svg" alt="" className="" />
        </Link>

        <h2 className="text-xl font-bold">Tourvisto</h2>
      </header>
      <img className="size-[24px]" src="../assets/icons/menu.svg" alt="" />
    </div>
  )
}

export default MobileSidebar
