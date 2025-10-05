"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";



export async function AddToCartAction(id: string) {
    const token = await getMyToken()
    console.log(token);
    if (!token) {
        throw Error("login first")

    }

    const values = {
        productId: id

    }
    let response;
    try {

        response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", values, {
            headers: {
                token: token as string
            }
        })

    } catch (error) {
        console.error(error)
        throw new Error("failed to add")
    }


    return response.data;
}