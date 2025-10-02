import React from 'react'
import errorImage from "./../../public/screens/404.jpg"
import Image from 'next/image'
const ErrorPage = () => {
    return (
        <div className='w-full md:w-[80%] mx-auto   my-5 px-5 md:px-0'>
            <Image src={errorImage} alt='not found' />

        </div>
    )
}

export default ErrorPage
