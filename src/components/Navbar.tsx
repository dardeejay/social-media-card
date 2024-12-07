import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React, { FC } from 'react'
import { Button } from './ui/button'

const Navbar: FC = () => (
    <div className='flex'>
        <SignedOut>
            <Button>
                <SignInButton />
            </Button>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
)

export default Navbar
