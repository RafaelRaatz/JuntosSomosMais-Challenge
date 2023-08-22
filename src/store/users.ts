import { create } from "zustand";

interface IStore {
  states: string;
  updateUser: (newUser: string) => void;
  origin: string;
  updateOrigin: (newOrigin: string) => void;
  userLenght: any[];
  updateLenght: (newOrigin: any[]) => void;
  userFilterLenght: any[];
  updateFilterLenght: (newOrigin: any[]) => void;
}

export const useGameStore = create<IStore>((set) => ({
  states: "",
  updateUser: (newUser: string) => {
    set({ states: newUser });
  },
  origin: "",
  updateOrigin: (newOrigin: string) => {
    set({ origin: newOrigin });
  },
  userLenght: [],
  updateLenght: (newLenght: any[]) => {
    set({ userLenght: newLenght });
  },
  userFilterLenght: [],
  updateFilterLenght: (newLenght: any[]) => {
    set({ userFilterLenght: newLenght });
  },
}));
