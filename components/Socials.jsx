import {FaLinkedin,FaGithub} from 'react-icons/fa'
import Link from 'next/link'
const links=[
    {
        icon:<FaGithub/>,
        path:'https://github.com/AKSHAY-CHOWDARY',
    },
    {
        icon:<FaLinkedin/>,
        path:'https://www.linkedin.com/in/akshay-chowdary-674988267/',
    }
]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {links.map((link,index)=>{
            return(
                <Link key={index} className={iconStyles} href={link.path}> 
                    {link.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials