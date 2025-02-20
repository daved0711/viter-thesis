
import { AlignVerticalDistributeCenter, BetweenVerticalEnd, Clapperboard, LayoutDashboard, PackageIcon, Star } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const SideNav = ({menu}) => {
    const links =[
    {
        title : 'Dashboard',
        slug : '/admin/Dashboard',
        icon : <LayoutDashboard/>,
    },
    { title : 'Analytics',
        slug : '/admin/Analytics',
        icon : <AlignVerticalDistributeCenter/>,
    },
    { title : 'Animalbite',
        slug : '/admin/Animalbite',
        icon : <BetweenVerticalEnd/>,
    },
       
    
]
  return (
    <>
       <aside className='p-4  border-r border-line'>
           <img src="" alt="" className='w-[60%] mx-auto mt-2' />
           <nav>
        <ul className='mt-10 '>
            {links.map((item,key)=>( <li className={`${menu === item.slug.replaceAll("/admin/","") ?
             " border-accent bg-accent opacity-100 text-white" : "xxxxx"} px-4 py-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`}
            key={key}>
                
                <NavLink to={`${item.slug}`} className="flex gap-2">
                {item.icon}{item.title}</NavLink></li>
      ))}
           
        </ul>
    </nav>
        </aside> 
    </>
    
  )
}
export default SideNav
