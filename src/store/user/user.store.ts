import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { UserState } from './user.types'

import { Role } from 'services/api/role/argument.types'

const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      isAuth: false,
      token: '',
      roleId: null,
      roleName: '',
      permissions: [],
      signIn: (token: string) =>
        set(() => ({
          token,
        })),
      setRole: (data: Role) =>
        set(() => ({
          roleId: data.roleId,
          roleName: data.roleName,
          permissions: data.permissions,
        })),
      setIsAuthTrue: () =>
        set(() => ({
          isAuth: true,
        })),
      logout: () =>
        set(() => ({
          token: '',
          isAuth: false,
        })),
      getAccess: () => get().token,
    }),
    { name: 'user-store' }
  )
)

export default useUserStore
