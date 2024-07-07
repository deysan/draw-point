import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ImageStore = {
  image: string | null;
  setImage: (url: string | null) => void;
  updatedAt: Date;
};

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => {
      return {
        image: null,
        updatedAt: new Date(),
        setImage: (url) => {
          set(() => ({
            image: url,
          }));
        },
      };
    },
    {
      name: 'image',
    }
  )
);
