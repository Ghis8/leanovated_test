'use client'

import LoadingComponent from '@/components/LaodingComponent'
import useAuthStore from '@/stores/authStore'
import { userData } from '@/utils/dummyUserData'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Auth() {
    const {login}=useAuthStore()
    const [loading,setLoading]=useState(false)
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const router=useRouter()
    const handleLogin=(e:any)=>{
        e.preventDefault()
        setLoading(true)
        let foundUser=false
        for(let u of userData){
            if(u.email === values.email &&  u.password === values.password){
                setLoading(false)
                foundUser=true
                login(u)
                router.push('/')
                toast.success("User Logged In successfully!")
            }
            // if(u.email === values.email && u.password !== values.password){
            //     setLoading(false)
            //     toast.error("Wrong credentials")
            // }else{
            //     setLoading(false)
            //     toast.error("User does not exist")
            // }
        }
        if(!foundUser){
            setLoading(false)
            toast.error("User Does not exist or bad credentials")
        }
        

    }

  return (
    <form onSubmit={handleLogin} className='w-2/4 mx-auto text-center flex flex-col justify-center items-center mt-10'>
        <span className='text-black text-center font-bold text-2xl'>Login</span>
        <input 
            className='w-2/4 mx-auto outline-none indent-2 border-[1px] py-3 mt-5 rounded-md border-gray-500'
            placeholder="Email address"
            onChange={(e)=>{setValues({...values,email:e.target.value.trim()})}}
        />
        <input 
            className='w-2/4 mx-auto indent-2 outline-none border-[1px] py-3 mt-5 rounded-md border-gray-500'
            placeholder="Password"
            type='password'
            onChange={(e)=>{setValues({...values,password:e.target.value.trim()})}}
        />
        <button type="submit" className='bg-blue-400 w-1/3 py-2 rounded-md font-semibold text-white mt-10'>
            {
                loading ?   <LoadingComponent /> :"Login"
            }
            
             
        </button>
    </form>
  )
}

export default Auth