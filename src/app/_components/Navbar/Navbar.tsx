"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from "./../../../../public/screens/freshcart-logo.svg"
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';
import { Badge } from "@/components/ui/badge"
// static => <image />
// api => img
const Navbar = () => {

    const { data: session, status } = useSession()
    const { numOfCartItems }: any = useContext(cartContext)


    return (
        <div className='bg-slate-100 py-5'>
            <div className="w-full md:w-[80%] mx-auto flex justify-between items-center flex-col md:flex-row text-center gap-6">
                {/* logo and links div */}
                <ul className='flex flex-col md:flex-row text-center gap-6'>



                    {status === "authenticated" && <>

                        <li>
                            <Link href="/">
                                <Image src={logo} alt='logo' />
                            </Link>
                        </li>

                        <li>
                            <Link href="/categories">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/brands">
                                Brands
                            </Link>
                        </li>
                        <li>
                            <Link href="/allorders">
                                Orders
                            </Link>
                        </li>
                        <li className='relative'>
                            <Link href="/cart">
                                {/* Cart */}
                                <i className="fa-solid fa-cart-shopping"></i>
                                <Badge className='absolute -top-[30%]'>
                                    {numOfCartItems}
                                </Badge>

                            </Link>
                        </li>
                    </>}

                    {status === "loading" && <>
                        <h1>Loading</h1>
                    </>}

                    {status === "unauthenticated" && <>
                        <Image src={logo} alt='logo' />
                    </>}

                </ul>
                {/* icons and sign out div */}
                <div className='flex flex-col md:flex-row text-center gap-2'>

                    <div>
                        <i className='fab mx-2 fa-facebook-f'></i>
                        <i className='fab mx-2 fa-youtube'></i>
                        <i className='fab mx-2 fa-linkedin'></i>
                        <i className='fab mx-2 fa-twitter'></i>

                    </div>



                    {status === "authenticated" && <>
                        <div>
                            <button className='cursor-pointer border-green-700 border rounded p-1' onClick={() => signOut({
                                callbackUrl: "/login"
                            })} >
                                logout
                            </button>
                        </div>
                        <div>
                            <h1 className='text-green-700'>Hi, {session.user?.name} </h1>
                        </div>
                    </>}

                    {status === "unauthenticated" && <>
                        <div>
                            <Link href="/register">
                                Register
                            </Link>

                        </div>
                        <div>
                            <Link href="/login">
                                Login
                            </Link>

                        </div>
                    </>}


                </div>
            </div>

        </div>
    )
}

export default Navbar
