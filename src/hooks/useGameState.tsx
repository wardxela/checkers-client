import { Dispatch, SetStateAction, useReducer, useState } from 'react';
import {
  checkersReducer,
  CheckersState,
  CheckersStateAction,
  CheckersStateActionTypes,
} from '../reducers';
import {
  CheckersManager,
  CheckerStaticInfo,
  Coords,
} from '../services/checkers-manager';

export interface GameState {
  checkers: CheckersState;
  dispatch: Dispatch<CheckersStateAction<CheckersStateActionTypes>>;
  hintCells: Coords[];
  setHintCells: Dispatch<SetStateAction<Coords[]>>;
  selectedChecker: Coords | undefined;
  setSelectedChecker: Dispatch<SetStateAction<Coords | undefined>>;
  checkersManager: CheckersManager;
}

export function useGameState(initCheckerInfo: CheckerStaticInfo[]): GameState {
  const [checkers, dispatch] = useReducer(checkersReducer, initCheckerInfo);
  const [hintCells, setHintCells] = useState<Coords[]>([]);
  const [selectedChecker, setSelectedChecker] = useState<Coords>();
  const checkersManager = new CheckersManager(checkers);

  const gameState = {
    checkers,
    dispatch,
    hintCells,
    setHintCells,
    selectedChecker,
    setSelectedChecker,
    checkersManager,
  };

  return gameState;
}
