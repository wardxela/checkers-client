import { GameState } from '../../services/checkers';

export interface CheckerProps {
  gameState: GameState;
  whose: string;
  x: number;
  y: number;
}
