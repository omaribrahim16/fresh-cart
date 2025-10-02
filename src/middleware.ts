import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// this middleware file is done for protecting the routes by checking if there is a token or not.

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {


    const token = await getToken({ req: request })

    const { pathname } = request.nextUrl
    const authPage = ["/login", "/register"]
    const routes = ["/", "/brands", "/categories", "/cart", "/productDetails", "/payment", "/allorders"]

    if (!token && routes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (token && authPage.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    // if (!token) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // else {
    //     if (pathname === "/login" || "/register") {
    //         return NextResponse.redirect(new URL('/', request.url))
    //     }
    // }


    return NextResponse.next()
}

// these are the protected routes we put them in an array called matchers

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/brands", "/categories", "/cart", "/productDetails", "/payment", "/allorders", "/login", "/register"],
}