import React from 'react'
import { Community, Company, Resources } from '../../constants'

const Footer = () => {

  return (
    <footer className='bg-black text-white p-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center justify-items-center *:capitalize'>
      <ul>
        <h1 className='text-lg font-bold mb-2'>Abstract</h1>
        <li>Branches</li>

      </ul>
      <ul>
        <h1 className='text-lg font-bold mb-2'>Resources</h1>
        {Resources.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <h1 className='text-lg font-bold mb-2'>Community</h1>
        {Community.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className=''>
        <h1 className='text-lg font-bold mb-2'>Company</h1>
        {Company.map((item) => (
          <li key={item}>{item}</li>
        ))}

        <h1 className='text-lg font-bold my-2'>Contact Us</h1>
        <li className='lowercase'>info@abstract.com</li>
      </ul>
      <ul className='self-end'>
        <img src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="abstract" className='h-10 w-28' />
        &copy; Copyright {new Date().getFullYear()} Abstract Studio Design, Inc.
        All rights reserved
      </ul>

    </footer>
  )
}

export default Footer