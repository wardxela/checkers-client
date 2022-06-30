import { useReducer, useState } from 'react';
import { checkersReducer } from '../reducer';
import { CheckersManager, CheckerStaticInfo, Coords } from '../manager';
import { GameState } from './types';
import { useBotOpponent } from './useBotOpponent';

export function useGameState(
  initCheckerInfo: CheckerStaticInfo[],
  client: string,
  opponent: string
): GameState {
  const [checkers, dispatch] = useReducer(checkersReducer, initCheckerInfo);
  const [hintCells, setHintCells] = useState<Coords[]>([]);
  const [selectedChecker, setSelectedChecker] = useState<Coords>();
  const [canMove, setCanMove] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const checkersManager = new CheckersManager(checkers, client, opponent);

  const gameState = {
    checkers,
    dispatch,
    hintCells,
    setHintCells,
    selectedChecker,
    setSelectedChecker,
    canMove,
    setCanMove,
    gameOver,
    setGameOver,
    checkersManager,
  };

  useBotOpponent(gameState);

  return gameState;
}
