"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";

export async function onlinePaymentAction(id: string, values: object) {
    const token = await getMyToken()
    const baseUrl = process.env.NEXT_URL!;


    if (!token) {
        throw new Error("login first")
    }

    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${baseUrl}`, values, {
        headers: {
            token: token as string
        }
    })

    return data
}