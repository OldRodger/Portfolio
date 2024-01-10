import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-dvh bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-12 md:mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint at eos omnis reprehenderit ipsum aperiam. A alias dolores facere vel accusantium ipsa aut voluptatum adipisci quisquam ducimus iste quis maiores ea similique molestias odit officiis, tenetur velit distinctio impedit! Obcaecati consequatur quis quae rerum aliquid omnis reiciendis aperiam accusamus!</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam nobis consectetur distinctio illum inventore! Eos quo rem consequatur libero at similique eum dicta, saepe ab! Tempora commodi sint voluptatem voluptatum omnis libero sit veniam recusandae quaerat dolorem? Eum ut, sequi expedita labore optio nihil consequatur iusto ipsam in voluptates?</p>
            </div>
        </div>
    )
}

export default About