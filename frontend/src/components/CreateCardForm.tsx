import React, { useState } from 'react'
import Button from './Button'
import { fetchService } from '../lib/fetch.service'
import { useNavigate } from 'react-router-dom'
import { Loader } from './shared/Loader'

const CreateCardForm = () => {
  const [error, setError] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [cardDetails, setCardDetails] = useState<{
    title: string, description: string
  }>({
    title: "", description: ""
  })
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!cardDetails.title || !cardDetails.description) {
      setError("All fields are must!")
      return;
    }
    setIsSubmitting(true)
    const { status, data } = await fetchService.post<Card>('/create-card',
      cardDetails
    )
    setIsSubmitting(false)

    if (status == 201) {
      navigate(`/card/${data?.title}`)
    }

  }
  if (isSubmitting) {
    return <Loader />
  }
  return (
    <div className='flex items-center justify-center '>
      <div className='border p-12 rounded-xl w-96'>
        <h1 className='text-5xl font-semibold'>Create Card</h1>
        <form action="" className='space-y-10 mt-10' onSubmit={handleSubmit}>
          <input type="text" className='rounded-md w-full ring-1 ring-black p-2 outline-none' placeholder='Enter title' name="title" onChange={handleChange} />
          <input type="text" className='rounded-md w-full ring-1 ring-black p-2 outline-none' placeholder='Enter description' name="description" onChange={handleChange} />
          <div className='flex justify-center '>
            <Button>Submit</Button>
          </div>
        </form>
        {!!error && <p className='text-xs mt-2 text-red-500'>{error}</p>}
      </div>
    </div>
  )
}

export default CreateCardForm