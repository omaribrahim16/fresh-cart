import getAllCategories from '@/apis/allCategories'
import React from 'react'
import { Category } from '@/types/category.type';
import Image from 'next/image';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import getAllSubCategories from '@/apis/allSubCategories';
import { Brand, Daum } from '@/types/brand.type';
import getAllBrands from '@/apis/allBrands';

const Brands = async () => {




    const data: Brand[] = await getAllBrands()


    return (
        <div className="w-full  mx-auto px-5 md:px-0 my-10 ">
            <h1 className="text-5xl mb-10 text-center text-green-600 font-bold">
                Brands
            </h1>

            <div className=" flex flex-wrap justify-center gap-4">
                {data.map(function (item: Daum, idx: number) {
                    return (
                        <Card
                            key={idx}
                            className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3   cursor-pointer rounded-2xl transition-all duration-300 ease-out hover:shadow-green-700"
                        >
                            <CardHeader className="">
                                <Image src={item.image} alt="" className="w-full" width={200} height={200} />
                            </CardHeader>

                            <CardFooter className="mx-auto">
                                <h2 className="text-xl">{item.name}</h2>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );


}

export default Brands
