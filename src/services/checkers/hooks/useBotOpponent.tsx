import { useEffect } from 'react';
import { BotOpponent } from '../bot';
import { CheckersManager } from '../manager';
import { GameState } from './types';

export function useBotOpponent(gameState: GameState): void {
  const { checkers, canMove, setCanMove, dispatch, checkersManager } =
    gameState;
  const client = checkersManager.client;
  const opponent = checkersManager.opponent;

  useEffect(() => {
    if (canMove) {
      return;
    }

    const opponentCheckersManager = new CheckersManager(
      checkers,
      opponent,
      client
    );

    const bot = new BotOpponent(
      checkers,
      opponentCheckersManager,
      client,
      opponent
    );

    const { x, y } = bot.findAnyAvailableChecker();
    const [toX, toY] = bot.findAnyAllowedCell(x, y);

    dispatch({
      type: 'MOVE',
      payload: {
        fromX: x,
        fromY: y,
        toX,
        toY,
      },
    });

    setCanMove(true);
  }, [canMove]);
}
