import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <span>LinkedIn</span>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/celestine-nwachukwu-1a545927a/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    <span>Github</span>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://www.github.com/OldRodger/"
        },
        {
            id: 3,
            child: (
                <>
                    <span>Mail</span>
                    <IoMail size={30} />
                </>
            ),
            href: "mailto:kvngcelestine007@gmail.com"
        },
        {
            id: 4,
            child: (
                <>
                    <span>Resume</span>
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(({ id, child, href, download, style }) => <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-slate-700 hover:ml-[-10px] duration-300 ${style}`}>
                        <a href={href} download={download} rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white'>
                            {child}
                        </a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default SocialLinks