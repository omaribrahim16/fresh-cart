"use server"

import { getMyToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { string } from "zod"

export async function getUserOrder() {

    const token = await getMyToken()
    const { id } = jwtDecode(token)

    // did console log to jwtdecode to get token as i forgot where to get it

    // console.log(token)

    if (!token) {
        throw new Error("login first")
    }

    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

    return data
}