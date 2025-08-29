import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
const Navitems = () => {

    const user = {
        name: "Adrian",
        email:'contact@arnaudpro',
        imageUrl:'../assets/images/david.webp'
    }
  return (
    <section className='flex flex-col gap-2 h-full justify-between '>
         <nav className='space-y-6'>
        <div className='flex gap-2'>
            <Link to='/' className="">
            <img src="../assets/icons/logo.svg" alt="LOGO" />
            </Link>
            <h1 className='text-2xl font-medium'>Tourvisto</h1>
        </div>
        <div>
            <div className='w-[80%] h-1'></div>
                {sidebarItems.map(({id,href,icon,label})=>(
                    <NavLink key={id} to={href} className=''>
                        {({isActive} : {isActive: boolean}) =>(
                            <div  className={`flex space-x-2 group px-[14px] py-[18px] rounded-[10px] ${isActive ? "bg-[#256FF1] text-white" : "text-black bg-white"}`}>
                                <img src={icon} alt={label} className={`group-hover:invert ${isActive ? 'brightness-0 invert':'text-dark-200'}`} />
                                <p>{label}</p>
                            </div>
                        )}
                    </NavLink>
                ))}
        </div>
        </nav>
        <footer className='flex gap-3'>
                <img src={user?.imageUrl || '../assets/images/david.webp'} alt="user" className='size-[40px] rounded-full' />
                <article className=''>
                    <h2 className='text-base font-semibold'>{user?.name}</h2>
                    <p className='text-[#7F7E83] text-sm'>{user?.email}</p>
                </article>
                <button>
                    <img src="../assets/icons/logout.svg" className='size-6' alt="" />

                </button>
            </footer>
    </section>
  )
}

export default Navitems
