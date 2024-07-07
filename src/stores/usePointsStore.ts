import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PointsStore = {
  points: Array<{
    id: string;
    x: number;
    y: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
  addPoint: () => void;
  updatePoint: (id: string, x: number, y: number) => void;
  deletePoint: (id: string) => void;
};

export const usePointsStore = create<PointsStore>()(
  persist(
    (set) => {
      const points = [] as PointsStore['points'];

      return {
        points,
        addPoint: () => {
          set((state) => ({
            points: [
              ...state.points,
              {
                id: uuidv4(),
                x: 0,
                y: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ],
          }));
        },
        updatePoint: (id, x, y) => {
          set((state) => ({
            points: state.points.map((point) => {
              if (point.id === id) {
                return {
                  ...point,
                  x,
                  y,
                  updatedAt: new Date(),
                };
              }

              return point;
            }),
          }));
        },
        deletePoint: (id) => {
          set((state) => ({
            points: state.points.filter((point) => point.id !== id),
          }));
        },
      };
    },
    {
      name: 'points',
    }
  )
);
