import { AddToCartAction } from '@/CartActions/addToCart'
import { getUserCartAction } from '@/CartActions/getUserCart'
import { removeCartItemAction } from '@/CartActions/removeCartItem'
import { Cart, ProductCart } from '@/types/cart.type'
import React, { createContext, useEffect, useState } from 'react'

import { updateCartAction } from '@/CartActions/updateCart'
import { clearCartAction } from '@/CartActions/clearCart'
import { CartContextType } from '@/types/cartcontext.type'

export const cartContext = createContext<CartContextType>({
    numOfCartItems: 0,
    products: [],
    totalCartPrice: 0,
    isLoading: false,
    cartId: '',

    addProductToCart: async () => { },
    removeCartItem: async () => { },
    updateCart: async () => { },
    clearCart: async () => { },
    afterPayment: () => { },
})

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {


    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [products, setProducts] = useState<ProductCart[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [cartId, setCartId] = useState("")



    async function addProductToCart(id: string) {

        try {
            const data = await AddToCartAction(id)
            getUserCart()   // to update cart details in navbar and display
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function removeCartItem(id: string) {
        try {
            const data: Cart = await removeCartItemAction(id)
            setNumOfCartItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalCartPrice(data.data.totalCartPrice)

            return data
        } catch (error) {
            console.log(error)

        }
    }


    async function updateCart(id: string, count: number) {
        try {
            const data = await updateCartAction(id, count)
            setNumOfCartItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalCartPrice(data.data.totalCartPrice)

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function clearCart() {
        try {
            const data = await clearCartAction()
            setNumOfCartItems(0)
            setProducts([])
            setTotalCartPrice(0)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function afterPayment() {
        setCartId("")
        setNumOfCartItems(0)
        setTotalCartPrice(0)
        setProducts([])
    }

    async function getUserCart() {
        setIsLoading(true)
        try {
            const data: Cart = await getUserCartAction()
            setNumOfCartItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalCartPrice(data.data.totalCartPrice)
            setCartId(data.cartId)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setIsLoading(false)

        }
    }

    useEffect(function () {
        getUserCart()
    }, [])


    return (
        <cartContext.Provider value={{
            numOfCartItems,
            products,
            totalCartPrice,
            isLoading,
            addProductToCart,
            removeCartItem,
            updateCart,
            clearCart,
            cartId,
            afterPayment
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider
