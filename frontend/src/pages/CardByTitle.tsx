import React, { useEffect, useState } from 'react'
import { fetchService } from '../lib/fetch.service'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card';
import Button from '../components/Button';

const CardByTitle = () => {
    const { title } = useParams();
    const [cards, setCards] = useState<Card[] | undefined>([]);
    const navigate = useNavigate()
    useEffect(() => {

        (async () => {
            const { data } = await fetchService.get<Card[]>(`/cards/${title}`)
            setCards(data)
        })()

    }, [])

    return (
        <div className='py-10 w-full'>
            <h1 className='text-center text-3xl'>Card with matching title &quot;{title}&quot;</h1>
            <div className='grid sm:grid-cols-2 my-10 gap-20 max-w-5xl mx-auto px-4'>
                {
                    cards && cards.length !== 0 && cards.map((card) => (
                        <Card description={card.description} title={card.title} id={card.id} key={card.id} />
                    ))
                }
            </div>
            {
                cards?.length === 0 && <h1 className='text-black text-2xl text-center min-h-72'>No Cards found with the matching title ☹️</h1>
            }
            <div className='flex justify-center'>
                <Button onClick={() => navigate('/')}>Go Back</Button>
            </div>
        </div>
    )
}

export default CardByTitle