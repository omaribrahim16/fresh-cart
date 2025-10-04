// cartContext.type.ts

import { ProductCart } from '@/types/cart.type'

export interface CartContextType {
    numOfCartItems: number
    products: ProductCart[]
    totalCartPrice: number
    isLoading: boolean
    cartId: string

    addProductToCart: (id: string) => Promise<any>
    removeCartItem: (id: string) => Promise<any>
    updateCart: (id: string, count: number) => Promise<any>
    clearCart: () => Promise<any>
    afterPayment: () => void
}
