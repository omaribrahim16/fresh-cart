import { getUserOrder } from '@/apis/getUserOrders'
import { CartItem, Order, Orders } from '@/types/order.type'
import React from 'react'
import { ShippingAddress } from './../../types/order.type';
import Image from 'next/image';

const AllOrders = async () => {

    const data: Orders = await getUserOrder()
    console.log(data)


    return (
        <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0'>
            <div className="allorders p-5">
                {/* <h1 className='text-2xl font-light'>Shipping Details</h1>
                <p className='my-3 text-green-600'>{} EGP</p> */}

                {data.map(function (order: Order, idx: number) {
                    return <div className='p-5 bg-slate-100 mb-5' key={idx}>

                        <div className="flex justify-between items-center">
                            {order.cartItems.map(function (item: CartItem, idx: number) {
                                return <div className='w-1/6 px-2' key={idx}>
                                    <Image src={item.product.imageCover} alt="" width={200} height={200} className='w-full' />
                                    <h2 className='line-clamp-2'>{item.product.title}</h2>
                                </div>
                            })}
                            <div className='flex flex-wrap justify-center items-center'>
                                <h2 className='w-full'>payment type method: {order.paymentMethodType}</h2>
                                <h2 className='w-full'>total order price: {order.totalOrderPrice} EGP</h2>

                            </div>

                        </div>
                    </div>
                })}

                {/* <div className="allProducts">
                    {products.map(function (product: ProductCart, idx: number) {
                        return <div key={idx} className="flex items-ceter justify-between py-3  border-b-[1px] border-green-700/35">
                            <div className='flex items-center gap-5'>
                                <div>
                                    <Image src={product.product.imageCover} height={200} width={200} alt='' />

                                </div>

                                <div>
                                    <h1>{product.product.title}</h1>
                                    <p className='my-3 text-green-600'>Price: {product.price} EGP</p>

                                </div>
                            </div>


                        </div>
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default AllOrders
