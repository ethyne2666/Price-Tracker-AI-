"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { LogIn, LogOut } from 'lucide-react'
import { AuthModal } from './AuthModal'
import { signOut } from '@/app/actions'

const AuthButton = ({user}) => {

   const [showAuthModal,setAuthModal] = useState(false);

   if (user) {
    return (
        <form action={ signOut }>
            <Button variant="ghost" size="sm" type="submit" className="gap-2 border cursor-pointer">
                <LogOut className='w-4 h-4 border-gray-500'/>
                Sign Out

            </Button>
        </form>
    )
   }

  return (
    <>
      <Button 
           onClick={()=> setAuthModal(true)}
           variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600 gap-2"
          > Sign In 
          <LogIn  className="w-4 h-4"/>
          </Button>

          <AuthModal
          isOpen={showAuthModal}
          onClose={()=> setAuthModal(false)}
          />

    </>
  )
}

export default AuthButton
