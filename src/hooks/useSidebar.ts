import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isExpanded: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  setIsMobile: (isMobile: boolean) => void;
}

export const useSidebar = create<SidebarState>()(
  persist(
    (set) => ({
      isExpanded: true,
      isMobile: false,
      toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
      setIsMobile: (isMobile: boolean) => set({ isMobile }),
    }),
    {
      name: 'sidebar-storage',
    }
  )
);