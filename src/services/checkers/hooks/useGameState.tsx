import { useReducer, useState } from 'react';
import { checkersReducer } from '../reducer';
import { CheckersManager, CheckerStaticInfo, Coords } from '../manager';
import { GameState } from './types';

export function useGameState(initCheckerInfo: CheckerStaticInfo[]): GameState {
  const [checkers, dispatch] = useReducer(checkersReducer, initCheckerInfo);
  const [hintCells, setHintCells] = useState<Coords[]>([]);
  const [selectedChecker, setSelectedChecker] = useState<Coords>();
  const [canMove, setCanMove] = useState<boolean>(true);
  const checkersManager = new CheckersManager(checkers);

  const gameState = {
    checkers,
    dispatch,
    hintCells,
    setHintCells,
    selectedChecker,
    setSelectedChecker,
    checkersManager,
    setCanMove,
    canMove,
  };

  return gameState;
}
