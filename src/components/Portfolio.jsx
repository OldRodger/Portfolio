import React from 'react'
import EvoGym from "../assets/images/portfolio/evogym.png"
import Wifahrm from "../assets/images/portfolio/wifahrm.png"
import LancersPoint from "../assets/images/portfolio/lancerspoint.png"
import HotelCardiff from "../assets/images/portfolio/hotel-cardiff.png"
import HotelHorizon from "../assets/images/portfolio/hotel-horizon.png"
import TicTacToe from "../assets/images/portfolio/tictactoe.png"

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: EvoGym,
            projectName: "EvoGym",
            bgColor: "bg-amber-800"

        },
        {
            id: 2,
            src: Wifahrm,
            projectName: "Wifahrm",
            bgColor: "bg-green-700"
        },
        {
            id: 3,
            src: LancersPoint,
            projectName: "Lancers Point",
            bgColor: "bg-green-700"
        },
        {
            id: 4,
            src: HotelCardiff,
            projectName: "Hotel Cardiff",
            bgColor: "bg-green-700"
        },
        {
            id: 5,
            src: HotelHorizon,
            projectName: "Hotel Horizon",
            bgColor: "bg-amber-800"
        },
        {
            id: 6,
            src: TicTacToe,
            projectName: "Tic-Tac-Toe",
            bgColor: "bg-slate-700"
        }
    ]


    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pt-10 md:pb-8 md:pt-0'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline-block'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, projectName, bgColor }) => (
                            <div key={id} className='group shadow-md shadow-gray-600 rounded-lg'>
                                <div className='relative' >
                                    <div className={`hidden absolute w-full h-full top-0 left-0 md:grid place-items-center ${bgColor} z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                                        <span className='font-bold text-2xl'>{projectName}</span>
                                    </div>
                                    <img src={src} alt="portfolio image" className='rounded-md' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio