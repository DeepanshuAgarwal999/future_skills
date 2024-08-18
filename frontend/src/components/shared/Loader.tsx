import loaderImg from '/icons/loader.svg'

export const Loader = () => {
    return (
        <div className='fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <img src={loaderImg} alt='loader' className='size-8 animate-spin' />
        </div>
    )
}
