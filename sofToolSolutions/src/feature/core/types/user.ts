
import { z } from 'zod'
import { AuthUserSchema, UserSchema } from '../schemas/userSchema'

// export type RoleValues = (typeof Roles)[keyof typeof Roles]

export type User = z.infer<typeof UserSchema>
export type AuthUser = z.infer<typeof AuthUserSchema>

export interface AuthValues {
  username: string
  password: string
}
