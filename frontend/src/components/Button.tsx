import React from 'react'

const Button = ({ children, onClick, ...props }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <button className='bg-black text-white rounded-lg  hover:opacity-70 ease-in-out duration-150 active:scale-95 px-4 py-2' onClick={onClick} {...props}>{children}</button>
    )
}

export default Button