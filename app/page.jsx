import { Button } from "@/components/ui/button";
import Image from "next/image";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import  {FiDownload } from 'react-icons/fi'
export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
    <div className="h-full flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none mb-8  xl:mb-0">
          <span className="text-xl">Computer Science and Engineering student</span>
          <h1 className="h1 mb-6 text-[50px] ">
            Hello I'm <br/>
            <span className="text-accent">Akshay Chowdary </span>
          </h1>
          <p className="max-w-[500px] mb-9"> Student of Computer Science and Engineering with a specialization in Artificial Intelligence
and Machine Learning (AIML). For the past two years, I have been familiarizing myself with the basic languages of
programming and am trying to build a strong foundation which would support me to enhance my technical skills in
future.</p>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-4">
            
              <a className="flex items-center justify-center gap-2 max-w-[200px] bg-primary text-accent px-2 py-2  border border-accent rounded-md hover:text-black hover:bg-accent-hover" download href="/AkshayResume.pdf">Resume <FiDownload className="text-[20px]"/> </a>
              
         
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6 justify-center items-center" iconStyles=" h-9 w-9  border border-accent  rounded-full flex justify-center items-center text-accent text-base  hover:bg-accent hover:text-primary   "/>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
        </div>
        <div>
       
        </div>

    </div>

    </div>
   </section>
  );
}
