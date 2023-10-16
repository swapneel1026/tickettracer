'use client'
import { Button } from "@radix-ui/themes"
import { signIn } from "next-auth/react"

const LoginPage = () => {
  const loginWithGoogle=()=>signIn('google',{callbackUrl:"http://localhost:3000"})
  return (
    <div className="flex justify-center">
      
      <Button onClick={()=>loginWithGoogle()}>
        Signin
      </Button>
    </div>
  )
}

export default LoginPage