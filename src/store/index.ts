import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserInfo } from '@/api/account/types';

export interface IStore {
  token: string;
  setToken: (val: string) => void;
  userInfo: UserInfo;
  setUserInfo: (val: UserInfo) => void;
}

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      token: '',
      setToken: (val: string) => set({ token: val }),
      userInfo: {} as UserInfo,
      setUserInfo: (val: UserInfo) => set({ userInfo: val })
    }),
    { name: 'store' }
  )
);
