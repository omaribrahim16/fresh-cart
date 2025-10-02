// we can make this page use client normally to use hooks to save state data and share it across.
"use client"
import { cartContext } from '@/Context/CartContext'
// import { getMyToken } from '@/utilities/token'
import React, { useContext } from 'react'
import Loading from '../loading'
import { Button } from '@/components/ui/button'
import { ProductCart } from '@/types/cart.type'
import Image from 'next/image'
import { id } from 'zod/v4/locales'
import { toast } from 'sonner'
import Link from 'next/link'

const Cart = () => {

    /*
    token
    */

    // const token = await getMyToken()
    // console.log(token);

    const { isLoading, totalCartPrice, products, removeCartItem, updateCart, clearCart } = useContext(cartContext)

    async function removeItem(id: string) {
        const data = await removeCartItem(id)

        if (data.status === "success") {
            toast.success("product removed from cart", {
                duration: 1000,
                position: "top-center"
            })
        }
        else {
            toast.error("failed to remove this product", {
                duration: 1000,
                position: "top-center"
            })
        }
    }
    async function updateCartItem(id: string, count: number) {
        const data = await updateCart(id, count)

        if (data.status === "success") {
            toast.success("product updated from cart", {
                duration: 1000,
                position: "top-center"
            })
        }
        else {
            toast.error("failed to update this product", {
                duration: 1000,
                position: "top-center"
            })
        }
    }

    if (isLoading) {
        return <Loading />
    }
    if ((products.length) == 0) {
        return <div className='flex justify-center items-center h-screen bg-green-200 w-[80%] mx-auto my-5'>
            <h1 className='text-green-600 text-2xl font-bold'>No items in cart currently</h1>
        </div>
    }
    async function clearCartList() {
        const data = await clearCart()

        if (data.message === "success") {
            // console.log("correct")
            toast.success("cart cleared", {
                duration: 1000,
                position: "top-center"
            })
        }
        else {
            // console.log(data)
            toast.error("failed to clear cart", {
                duration: 1000,
                position: "top-center"
            })
        }
    }

    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-100'>
            <div className="p-5">
                <h1 className='text-2xl font-light'>Shop cart: </h1>
                <p className='my-3 text-green-600'>Total Price: {totalCartPrice} EGP</p>
                <Button className='mb-2 mx-2' onClick={clearCartList}>Clear Cart</Button>
                <Button className='mb-2 mx-2' >
                    <Link href={"/payment"}>Payment</Link>
                </Button>

                <div className="allProducts">
                    {products.map(function (product: ProductCart, idx: number) {
                        return <div key={idx} className="flex items-ceter justify-between py-3  border-b-[1px] border-green-700/35">
                            <div className='flex items-center gap-5'>
                                <div>
                                    <Image src={product.product.imageCover} height={200} width={200} alt='' />

                                </div>

                                <div>
                                    <h1>{product.product.title}</h1>
                                    <p className='my-3 text-green-600'>Price: {product.price} EGP</p>
                                    <Button onClick={() => removeItem(product.product.id)}>Remove item</Button>

                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <Button className='bg-green-600' onClick={() => updateCartItem(product.product.id, product.count + 1)}>+</Button>

                                <p>{product.count}</p>
                                <Button className='bg-green-600' onClick={() => updateCartItem(product.product.id, product.count - 1)}>-</Button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart
