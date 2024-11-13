import { AuthUser } from '../core/types/user';
import { Nulleable } from '../core/types/utils';
import type { StateCreator } from 'zustand'

export interface User {
  userId: string;
  username: string;
  role: string;
  email: string;
}

export interface AuthState extends Nulleable<AuthUser> {
  isAuthenticated: boolean
  loggedInDate: Date | null
}



export interface AuthActions {
  login: (user: User, token: string) => void;
  logout: () => void;
}

export type AuthSlice = AuthState & AuthActions


const initialState: AuthState = {
  isAuthenticated: false,
  loggedInDate: null,
  firstName: null,
  lastName: null,
  refreshToken: null,
  roleId: null,
  roleName: null,
  token: null,
  userId: null
}

export  const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  login(newState){
    set({
      isAuthenticated: true,
      loggedInDate: new Date(),
      ...newState
    })
  },

  logout() {
      set(initialState)
  },


})


//  persist(
//   (set) => ({
//    isAuthenticated: false,
//    user: null,
//    accessToken:null,
//    login:( user, token) => {
//     set({user, accessToken: token, isAuthenticated: true})
//    },
//    logout:() => {
//        set({user: null, accessToken: null, isAuthenticated:false})
//    }
//  }),
//  {
//    name: 'auth-storage', // nombre en el almacenamiento
//    partialize: (state) => ({
//      isAuthenticated: state.isAuthenticated,
//      user: state.user,
//      accessToken: state.accessToken,
//    })
//  }

// )
// )

