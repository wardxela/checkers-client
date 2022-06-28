import { Dispatch, SetStateAction } from 'react';

export type Coords = [number, number];

export interface ICheckersContext {
  selectedChecker?: Coords;
  setSelectedChecker: Dispatch<SetStateAction<Coords | undefined>>;
  allowedCells: Coords[];
  setAllowedCells: Dispatch<SetStateAction<Coords[]>>;
}
