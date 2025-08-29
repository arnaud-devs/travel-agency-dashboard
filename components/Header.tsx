interface props{
    title:string;
    description:string;
}
const Header = ({title,description}:props) => {
  return (
    <header className="flex flex-col  w-full justify-between md:flex-row p-7">
       <div className="flex flex-col ">
         <h1 className="text-[24px] font-semibold">{title}</h1>
        <article className="text-[#7F7E83] text-base">
            {description}
        </article>
       </div>
       <button className="bg-[#256FF1] flex justify-center gap-[10px] items-center rounded-lg px-[20px] py-3 h-[44px] cursor-pointer">
        <img src="../assets/icons/plus.svg"  className="size-[20px]" alt="" />
        <p className="text-nowrap text-white">Create a trip</p>
       </button>

    </header>
  )
}

export default Header
