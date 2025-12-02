import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserInfo } from '@/api/account/types';

export interface IStore {
  token: string;
  setToken: (val: string) => void;
  userInfo: UserInfo;
  setUserInfo: (val: UserInfo) => void;
  isExpand: boolean;
  toggleIsExpand: () => void;
}

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      // token
      token: '',
      setToken: (val: string) => set({ token: val }),
      // 用户信息
      userInfo: {} as UserInfo,
      setUserInfo: (val: UserInfo) => set({ userInfo: val }),
      // 展开收起侧边栏
      isExpand: true,
      toggleIsExpand: () => set((state) => ({ isExpand: !state.isExpand }))
    }),
    { name: 'store' }
  )
);
