import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, description, id }: Card) => {

    const navigate = useNavigate()

    return (
        <article className='bg-[#F4F6F8] rounded-xl border border-[#DEE5ED] py-4 cursor-pointer hover:scale-105 duration-200 ease-in-out hover:shadow-lg transition-all' onClick={() => navigate(`/card/${title}`)}>
            <h1 className='pb-2 border-b text-lg border-[#E5EAEF] px-4 font-bold capitalize'>{title}</h1>
            <p className='text-[#585359] mt-2 px-4 font-medium'>{description}</p>
        </article>
    )
}

export default Card