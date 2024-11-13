import { createContext, useContext, useState } from "react";
import { AuthSlice, AuthState, } from "./authStore";
import { useBoundStore } from "@/store";
import { shallow } from 'zustand/shallow'
import { Spinner } from "../core";
import { AuthValues } from "../core/types/user";


type ActionCallback = () => void

interface AuthContextValue {
  login: (params: AuthValues, cd?: ActionCallback) => Promise<void>
  logout: (cb?: ActionCallback) => void
  isLoggingIn: boolean
  user: AuthState
}

interface ProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider: React.FC<ProviderProps> = ({children}) => {
  const value = useAuthProvider()
  if (value.user.isAuthenticated) return <Spinner />

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


const useAuthProvider = (): AuthContextValue => {
   const authStore: AuthSlice = useBoundStore(
    ({
      
      isAuthenticated,
      loggedInDate,
      login,
      logout,
      firstName,
      lastName,
      refreshToken,
      roleId,
      roleName,
      token,
      userId
      
       
   }) => ({
    isAuthenticated,
      loggedInDate,
      login,
      logout,
      firstName,
      lastName,
      refreshToken,
      roleId,
      roleName,
      token,
      userId
   }),
   shallow
  )

  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [error, setError] = useState('')
 

  const login : AuthContextValue['login'] = async (values, callback) => {
    setIsLoggingIn(true)
    setError('')
    try {
     console.log(values)
     callback?.()
    } catch (error) {
       console.log(error)
      setError('Usuario o contraseña incorrecta')
    }

  }


  const logout: AuthContextValue['logout'] = (callback) => {
    authStore.logout()
    callback?.()
  }

  return {
    user: {
      isAuthenticated: authStore.isAuthenticated,
      token: authStore.token,
      refreshToken:authStore.refreshToken,
      roleName: authStore.roleName,
      userId: authStore.userId,
      loggedInDate: authStore.loggedInDate,
      firstName: authStore.firstName,
      lastName: authStore.lastName,
      roleId: authStore.roleId
    },
    login,
    isLoggingIn,
    logout
  }


}


export const useAuth = (): AuthContextValue => useContext(AuthContext)
export const useAuthStore = (): Omit<AuthState, 'token' | 'refreshToken'> =>
  useBoundStore(
    ({ isAuthenticated, loggedInDate, firstName, lastName, roleId, roleName, userId }) => ({
      isAuthenticated: true,
      loggedInDate,
      firstName,
      lastName,
      roleId,
      roleName,
      userId
    }),
    shallow
  )

