import getAllCategories from '@/apis/allCategories'
import React from 'react'
import { Category } from '@/types/category.type';
import Image from 'next/image';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import getAllSubCategories from '@/apis/allSubCategories';

const Categories = async () => {




    const data: Category[] = await getAllCategories()
    console.log(data)
    return (
        <div>
            <h1 className="text-5xl my-5 text-center text-green-600 font-bold">
                Categories
            </h1>
            <div className='mb-3 flex flex-wrap justify-center items-center p-5'>

                {data.map(function (category: Category, idx: number) {
                    return <div className='w-full sm:w-1/2 md:w-1/3  p-3 ' key={idx}>
                        <div className="">
                            <div className="inner">
                                <Card className="p-2 gap-2 cursor-pointer rounded-2xl">
                                    <CardHeader className="w-full p-0">
                                        <Image width={500} height={500} src={category.image} alt={category.name} className=' w-[400px] h-[400px] mx-auto  ' />
                                    </CardHeader>
                                    <CardContent className="p-0 text-center">
                                        <p className="font-normal text-green-500 mb-3">{category.name}</p>
                                        <p className="font-light line-clamp-1">{category.name}</p>

                                    </CardContent>
                                    <CardFooter className="p-0">
                                        <div className="w-full">
                                            {/* <Button onClick={getAllSubCategoriesAction(idx)}>Subcategory</Button> */}
                                        </div>
                                    </CardFooter>

                                </Card>
                            </div>

                        </div >

                    </div>
                })}
            </div>
        </div>

    )


}

export default Categories
