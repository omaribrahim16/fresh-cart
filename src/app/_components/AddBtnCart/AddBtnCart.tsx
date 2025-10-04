"use client"
// import { AddToCartAction } from "@/CartActions/addToCart";
import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import { toast } from 'sonner'

const AddBtnCart = ({ id }: { id: string }) => {


    const { addProductToCart }: any = useContext(cartContext)

    async function handleAddCart() {
        const data: any = await addProductToCart(id)
        if (data.status === 'success') {
            console.log(data);
            toast.success(data.message, {
                duration: 1000,
                position: "top-center"
            })
        }
        else {
            // console.log(data);

            toast.error("failed to add this product", {
                duration: 1000,
                position: "top-center"
            })
        }
    }
    return (
        <div>
            <Button className='w-full mt-10' variant="default" onClick={handleAddCart}>Add to Cart</Button>

        </div>
    )
}

export default AddBtnCart
