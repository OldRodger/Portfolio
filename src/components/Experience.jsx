import React from 'react'
import html from "../assets/images/experience/html.png"
import css from "../assets/images/experience/css.png"
import javascript from "../assets/images/experience/javascript.png"
import typescript from "../assets/images/experience/typescript.png"
import react from "../assets/images/experience/react.png"
import tailwind from "../assets/images/experience/tailwind.png"
import node from "../assets/images/experience/node.png"
import redux from "../assets/images/experience/redux.png"

function Experience() {
    const tech = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: typescript,
            title: "Typescript",
            style: "shadow-blue-500",
        },
        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            src: node,
            title: "Node",
            style: "shadow-green-400",
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 8,
            src: redux,
            title: "Redux",
            style: "shadow-purple-400",
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-dvh border-t-4 border-red-600'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='pt-20 pb-8 md:pt-0'>
                    <p className='text-4xl font-bold inline-block border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>These are the technologies i've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {tech.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience