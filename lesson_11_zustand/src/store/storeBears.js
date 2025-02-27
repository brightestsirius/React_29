import { create } from 'zustand'

const useStoreBears = create((set) => ({
  bears: 0,
  name: `Bear Teddy`,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export default useStoreBears;