// cartContext.type.ts

import { Cart, ProductCart } from '@/types/cart.type'

export interface CartContextType {
    numOfCartItems: number
    products: ProductCart[]
    totalCartPrice: number
    isLoading: boolean
    cartId: string
    addProductToCart: (id: string) => Promise<Cart | undefined>
    removeCartItem: (id: string) => Promise<Cart | undefined>
    updateCart: (id: string, count: number) => Promise<Cart | undefined>
    clearCart: () => Promise<Cart | undefined>
    afterPayment: () => void
}
