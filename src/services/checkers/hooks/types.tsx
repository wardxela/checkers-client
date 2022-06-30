import { Dispatch, SetStateAction } from 'react';
import { CheckersManager, Coords } from '../manager';
import {
  CheckersState,
  CheckersStateAction,
  CheckersStateActionTypes,
} from '../reducer';

export interface GameState {
  checkers: CheckersState;
  dispatch: Dispatch<CheckersStateAction<CheckersStateActionTypes>>;
  hintCells: Coords[];
  setHintCells: Dispatch<SetStateAction<Coords[]>>;
  selectedChecker: Coords | undefined;
  setSelectedChecker: Dispatch<SetStateAction<Coords | undefined>>;
  canMove: boolean;
  setCanMove: Dispatch<SetStateAction<boolean>>;
  checkersManager: CheckersManager;
}
