import create from 'zustand'

interface CounterState {
    counter: number
    setCounter: (by?: number) => void
  }

const useCounterStore = create<CounterState>()((set) => ({
  counter: 0,
  setCounter: (by = 1) => set((state) => ({ counter: state.counter + by })),
}))

export default useCounterStore