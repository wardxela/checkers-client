import { GameState } from '../../hooks';
import { CheckersManager } from '../../services/checkers-manager';
import { isCellDark } from '../../utils';
import { CellWithoutChecker } from './States/CellWithoutChecker';
import { CellWithChecker } from './States/CellWithChecker';
import classes from './Cell.module.css';

interface CellProps {
  x: number;
  y: number;
  checkersManager: CheckersManager;
  gameState: GameState;
}

export function Cell(props: CellProps) {
  const { x, y, checkersManager } = props;
  const color = isCellDark(x, y) ? classes.dark : classes.light;
  const checker = checkersManager.getChecker(x, y);

  if (!checker) {
    return <CellWithoutChecker color={color} {...props} />;
  }

  return (
    <CellWithChecker color={color} checkerStaticInfo={checker} {...props} />
  );
}
