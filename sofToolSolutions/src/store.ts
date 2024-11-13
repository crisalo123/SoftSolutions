
import { persist } from 'zustand/middleware'
import { createWithEqualityFn } from 'zustand/traditional'
import { AuthSlice, createAuthSlice } from './feature/contex/authStore';







type BoundStore = AuthSlice 
type StorageState = { token: string; refreshToken: string } | null

export const useBoundStore = createWithEqualityFn(
  persist<BoundStore, [], [], StorageState>(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: 'auth-store',
      version: 1,
      partialize: ({ token, refreshToken, loggedInDate, userId , isAuthenticated}) => {
        const hasValues = token && refreshToken && loggedInDate && userId && isAuthenticated
        if (hasValues) return { token, refreshToken, loggedInDate }

        return null
      }
    }
  ),
  Object.is
)
