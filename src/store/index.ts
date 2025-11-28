import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IStore {
  token: string;
  setToken: (val: string) => void;
}

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      token: '',
      setToken: (val: string) => set({ token: val })
    }),
    { name: 'store' }
  )
);
