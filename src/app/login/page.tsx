"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, LoginSchemaType } from '@/schema/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { signIn } from "next-auth/react"

const Login = () => {

    const router = useRouter()
    /*
    react hook form === control input in form
    zod === handle schema validation
    shadcn === handle ui design
    */

    const form = useForm<LoginSchemaType>({
        defaultValues: {
            email: "",
            password: "",

        },
        resolver: zodResolver(loginSchema)
    })

    async function handleLogin(values: LoginSchemaType) {

        // try {

        //     const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
        //     console.log(data);
        //     toast.success(data.message, {
        //         position: 'bottom-center',
        //         duration: 3000
        //     })

        //     router.push("/")


        // } catch (error) {
        //     toast.error(error.response.data.message, {
        //         position: 'bottom-center',
        //         duration: 3000
        //     })
        // }
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
            callbackUrl: "/"
        })

        if (res?.ok) {
            toast.success("login success", {
                position: 'bottom-center',
                duration: 3000
            })
            window.location.href = res.url || "/";
        }
        else {
            toast.error(res?.error, {
                position: 'bottom-center',
                duration: 3000
            })
        }

    }

    return (
        <div className='mx-auto px-5 md:px-0 w-full md:w-1/2 my-12'>
            <h1 className='text-3xl text-center font-bold mb-10'>Login Form</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-3'>


                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button className='w-full mt-5'>Login Now</Button>
                </form>

            </Form>
        </div>
    )
}

export default Login
