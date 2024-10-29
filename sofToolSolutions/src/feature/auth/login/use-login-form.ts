import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { usePasswordVisibility } from '@/feature/core'

import { Login, loginSchema } from './login-schema'
import { useAuth } from '@/feature/hooks/useAuth'

export const useLoginForm = () => {
  const { passwordsVisible, toggleVisibility } = usePasswordVisibility()
  const [isLoading, setIsLoading] = useState(false)

   const { handleLogin } = useAuth()

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema)
  })

  const onSuccess = async (data: Login): Promise<void> => {
     setIsLoading(true)
     await handleLogin(data)
    setIsLoading(false)
  }

  return {
    form,
    isLoading,
    passwordsVisible,
    onSuccess,
    toggleVisibility
  }
}
