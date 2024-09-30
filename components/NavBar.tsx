'use client'
import useAuthStore from '@/stores/authStore'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function NavBar() {
  const {user, isAuthenticated, login, logout}=useAuthStore()

  const Logout=()=>{
    logout()
    toast.success("User Logged Out")
  }
  if(!isAuthenticated){
    return( 
      <section className='w-screen bg-gray-800'>
        <div className='w-3/4 mx-auto flex items-center  justify-between py-5'>
          <span className='text-white font-bold'>Project Master</span>
          <div className='flex items-center space-x-5'>
              <Link className='text-white' href=''>Dashboard</Link>
              <Link className='text-white' href=''>Projects</Link>
              <Link className='text-white' href=''>Organisations</Link>
              <Link className='text-white' href=''>Profile</Link>
              <Link  className='text-white' href='/auth'>Login</Link>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className='w-screen bg-gray-800'>
        <div className='w-3/4 mx-auto flex items-center  justify-between py-5'>
            <span className='text-white font-bold'>Project Master</span>
            <div className='flex items-center space-x-5'>
                <Link className='text-white' href=''>Dashboard</Link>
                <Link className='text-white' href=''>Projects</Link>
                <Link className='text-white' href=''>Organisations</Link>
                <Link className='text-white' href=''>Profile</Link>
                <span onClick={Logout} className='text-white cursor-pointer' >Logout</span>
            </div>
        </div>
        
    </section>
    
  )
}

export default NavBar