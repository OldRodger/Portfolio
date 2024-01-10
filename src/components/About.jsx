import React from 'react'

function About() {
    const yearsOfExp = new Date(Date.now()).getFullYear() - new Date(2022, 2).getFullYear();
    return (

        <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className="max-w-screen-lg mx-auto px-4 py-20 md:py-0 h-full flex flex-col md:justify-center gap-12">
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline-block'>About</p>
                </div>
                <div className='grid gap-6 text-lg md:text-xl'>
                    <p className='leading-8 tracking-wide'>
                        My journey began with a deep curiosity for creating visually stunning interfaces that not only captivate users but also enhance their interaction with digital platforms. Through hands-on experience, I've become proficient in <span className='font-semibold'>Javascript</span> and <span className='font-semibold'>Typescript</span>, allowing me to bring creativity and functionality together in every project.
                    </p>

                    <p className='leading-8 tracking-wide'>
                        I am a dedicated frontend developer with a passion for transforming imaginative designs into seamless, interactive user experiences. Over the past {yearsOfExp} years, I've immersed myself in the dynamic world of React development, honing my skills in crafting elegant and responsive web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About