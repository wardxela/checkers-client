import { Dispatch, SetStateAction, useReducer, useState } from 'react';
import {
  checkersReducer,
  CheckersState,
  CheckersStateAction,
  CheckersStateActionTypes,
} from '../reducers';
import { CheckerStaticInfo, Coords } from '../services/checkers-manager';

export interface GameState {
  checkers: CheckersState;
  dispatch: Dispatch<CheckersStateAction<CheckersStateActionTypes>>;
  hintCells: Coords[];
  setHintCells: Dispatch<SetStateAction<Coords[]>>;
  selectedChecker: Coords | undefined;
  setSelectedChecker: Dispatch<SetStateAction<Coords | undefined>>;
}

export function useGameState(initCheckerInfo: CheckerStaticInfo[]): GameState {
  const [checkers, dispatch] = useReducer(checkersReducer, initCheckerInfo);
  const [hintCells, setHintCells] = useState<Coords[]>([]);
  const [selectedChecker, setSelectedChecker] = useState<Coords>();

  const gameState = {
    checkers,
    dispatch,
    hintCells,
    setHintCells,
    selectedChecker,
    setSelectedChecker,
  };

  return gameState;
}
