import { GameState } from '../../hooks';

export interface CheckerProps {
  gameState: GameState;
  whose: string;
  x: number;
  y: number;
}
