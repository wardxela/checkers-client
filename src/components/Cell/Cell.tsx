import { GameState } from '../../services/checkers/hooks';
import { isCellDark } from '../../utils';
import { CellWithoutChecker } from './States/CellWithoutChecker';
import { CellWithChecker } from './States/CellWithChecker';
import classes from './Cell.module.css';

interface CellProps {
  gameState: GameState;
  x: number;
  y: number;
}

export function Cell({ x, y, gameState }: CellProps) {
  const color = isCellDark(x, y) ? classes.dark : classes.light;
  const checker = gameState.checkersManager.findChecker(x, y);

  if (!checker) {
    return (
      <CellWithoutChecker gameState={gameState} color={color} x={x} y={y} />
    );
  }

  return (
    <CellWithChecker
      gameState={gameState}
      whose={checker.whose}
      color={color}
      x={x}
      y={y}
    />
  );
}
