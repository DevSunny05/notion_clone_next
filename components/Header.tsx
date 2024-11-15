"use client"

import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Header = () => {
    const {user}=useUser()
  return (
    <div className='flex items-center justify-between p-5'>
        {
            user && (
                <h1 className='text-2xl'>
                    {user?.firstName}
                    {`'s`}
                </h1>
            )
        }

        {/* breadcrum */}
        <Breadcrumbs/>

        <SignedOut>
            <SignInButton/>
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>

    </div>
  )
}

export default Header