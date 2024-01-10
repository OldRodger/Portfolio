import React from 'react'

function About() {
    return (

        <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className="max-w-screen-lg mx-auto px-4 py-20 md:py-0 h-full flex flex-col md:justify-center gap-12">
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline-block'>About</p>
                </div>
                <div className='grid gap-6 text-lg md:text-xl'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium perspiciatis non quisquam qui, unde soluta voluptas quibusdam accusamus a animi aut modi culpa labore dicta reprehenderit deserunt cupiditate nemo explicabo blanditiis. Ut rem quia quod deserunt eius tenetur, nobis odio, laudantium quidem cumque blanditiis cum porro accusantium officia ad.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium perspiciatis non quisquam qui, unde soluta voluptas quibusdam accusamus a animi aut modi culpa labore dicta reprehenderit deserunt cupiditate nemo explicabo blanditiis. Ut rem quia quod deserunt eius tenetur, nobis odio, laudantium quidem cumque blanditiis cum porro accusantium officia ad.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About