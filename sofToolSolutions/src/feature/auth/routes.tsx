import { Navigate } from 'react-router-dom'

import type { RouteObject as BaseRouteObject } from '@/feature/core/types'
import { lazyImport } from '@/feature/core/utils/lazyImport'

const { Login } = lazyImport(() => import('@/feature/pages/login'), 'Login')

type RouteObject = BaseRouteObject & {
  name?: string
}

export const authRoutes: RouteObject[] = [
  {
    name: '',
    path: '/',
    element: <Login />
  },

  {
    name: '',
    path: '*',
    element: <Navigate replace to='/' />
  }
]

export default authRoutes
