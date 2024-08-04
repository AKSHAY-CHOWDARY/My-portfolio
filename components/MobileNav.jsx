"use client";
import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
        name:'home',
        path:'/'
    },
    {
        name:'projects',
        path:'/projects'
    },
    {
        name:'contact',
        path:'/contact'
    },
]



const MobileNav = () => {
    const pathname=usePathname();

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
             <div className="mt-32 mb-32 text-center text-2xl">
                <Link href='/'>
                   <h1 className="text-3 xl font-semibold"> Akshay<span className="text-accent">Chowdary</span></h1>
                </Link>
             </div>
             <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link,index)=>{
                    return (
                        <Link href={link.path} key={index} className={`${link.path==pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name} 
                        </Link>
                    )
                })}
             </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav