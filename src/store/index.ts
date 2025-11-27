import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      token: '',
      setToken: (val: string) => set({ token: val })
    }),
    { name: 'store' }
  )
);
