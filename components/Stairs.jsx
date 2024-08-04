import { motion,animate } from "framer-motion"


const stairAnimation={
    initial:{
        top:"0%",

    },
    animate:{
        top:"100%",
    },
    end:{
        top:["100%","0%"]
    }
}
const reverse=(index)=>{
    const steps=6;
    return steps-index-1;
}

const Stairs = () => {
  return (
    <>

    {[...Array(6)].map((_,index)=>{
       return( <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration:0.4,
                ease:"easeInOut",
                delay:reverse(index)*0.1
            }}
            className="h-full w-full bg-white relative"
        />
       )
    })} 
    
    
    </>
  )
}

export default Stairs