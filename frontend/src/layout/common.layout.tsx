import React from 'react'
import { Navbar } from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen flex justify-between flex-col'>
            <Navbar />
            <main className='flex-1 min-h-screen '>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default CommonLayout