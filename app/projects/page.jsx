"use client";
import {BsArrowUpRight,BsGithub} from "react-icons/bs"
import {
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
}

from "@/components/ui/tooltip"
import Carousel from "@/components/Carousel";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const list=[
  {
    num:'01',
    category:'Fullstack',
    title:'Recipe Sharing Website',
    description:'Discover, share, and savor culinary delights from around the world. This recipe-sharing platform lets you create, find, and favorite recipes, join a vibrant community, and elevate your cooking game with ease.',
    github:'https://github.com/AKSHAY-CHOWDARY/reciepe-app-final/tree/master',
    stack:[{name:'Reactjs'},{name:'Nodejs'},{name:'Bootstrap'},{name:'css'}]
  },
]




const Projects = () => {

  const [project,setProject]=useState(list[0]);


  return (
    <div className="container mx-auto flex justify-center items-center   ">
      
      <div className="w-full flex flex-col border border-white/60 rounded   xl:w-[70%]">
        <div>
          <div className="text-6xl leading-none font-extrabold text-white text-outline mb-6 px-4 py-4">{project.num}</div>
        </div>
        <h2 className="text-[38px] mb-6 px-4 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
        <p className="text-white/60 p-4 mb-4">{project.description}</p>
        <div className="container my-4">
        <Carousel/>
        </div>
        <ul className="flex justify-center items-center gap-4">
          {
            project.stack.map((item,index)=>{
              return <li key={index} className="text-xl text-accent">{item.name}</li>
            })
          }
        </ul>
        <div className="border border-white/20  " >
        <Link href={project.github}>
          <TooltipProvider delayDuration={100}>
            <Tooltip className="flex justify-left">
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
              <BsGithub className="text-white text-3xl group-hover:text-accent"/>
              </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
  
            </Tooltip>
          </TooltipProvider>
        </Link>
        </div>
        
    
      </div>

    </div>
  )
}

export default Projects