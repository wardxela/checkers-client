import { GameState } from '../../../hooks';
import {
  CheckersManager,
  CheckerStaticInfo,
} from '../../../services/checkers-manager';
import { Checker } from '../../Checker/Checker';
import classes from '../Cell.module.css';

interface CellWithCheckerProps {
  checkersManager: CheckersManager;
  checkerStaticInfo: CheckerStaticInfo;
  gameState: GameState;
  color: string;
}

export function CellWithChecker({ color, ...props }: CellWithCheckerProps) {
  const styles = `${classes.cell} ${color}`;

  return (
    <div className={styles}>
      <Checker {...props} />
    </div>
  );
}
