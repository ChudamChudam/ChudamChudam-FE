import { create } from 'zustand';

type LetterState = {
  selected: string;
  sender: string;
  receiver: string;
  setReceiver: (value: string) => void;
  setSender: (value: string) => void;
  setSelected: (image: string) => void;
};

export const useLetterStore = create<LetterState>()((set) => ({
  selected: '/letter-back-1.svg',
  setSelected: (image) => set(() => ({ selected: image })),
  sender: '',
  setSender: (value) => set(() => ({ sender: value })),
  receiver: '',
  setReceiver: (value) => set(() => ({ receiver: value })),
}));
