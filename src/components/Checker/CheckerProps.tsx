import { GameState } from '../../services/checkers/hooks';

export interface CheckerProps {
  gameState: GameState;
  whose: string;
  x: number;
  y: number;
}
