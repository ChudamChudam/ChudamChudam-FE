import { create } from 'zustand';

type LetterState = {
  selected: string;
  sender : string;
  receiver : string;
  setReceiver: (value: string) => void;
  setSender : (value: string) => void;
  setSelected: (image: string) => void;
};

// TODO: 편지지 디자인되면 selected 수정하기
export const useLetterStore = create<LetterState>()((set) => ({
  selected: '0',
  setSelected: (image) => set(() => ({ selected: image })),
  sender : '',
  setSender: (value) => set(() => ({ sender: value })),
  receiver : '',
  setReceiver: (value) => set(() => ({ receiver: value })),
}));
