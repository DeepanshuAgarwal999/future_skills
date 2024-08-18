import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className='bg-black  text-white flex items-center justify-around w-full py-4'>
            <div className='text-lg flex items-center  text-nowrap gap-2'>
                <img src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="" sizes='5' />
                <p>| Help Center</p>
            </div>
            <button className='border rounded-md h-10 px-4 active:scale-95 duration-300 ease-in-out text-[#F7FEEC] bg-[#1A1A1A]' title='"create card' onClick={() => navigate('/create-card')}>Submit a request</button>
        </nav>
    )
}
