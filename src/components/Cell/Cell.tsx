import { CheckersManager } from '../../services/checkers-manager';
import { isCellDark } from '../../utils';
import { Checker } from '../Checker/Checker';
import classes from './Cell.module.css';

interface CellProps {
  x: number;
  y: number;
  checkersManager: CheckersManager;
}

export function Cell({ x, y, checkersManager }: CellProps) {
  const color = isCellDark(x, y) ? classes.dark : classes.light;
  const styles = `${classes.cell} ${color}`;

  const checker = checkersManager.getChecker(x, y);

  if (!checker) {
    return <div className={styles}></div>;
  }

  return (
    <div className={styles}>
      <Checker checkerStaticInfo={checker} checkersManager={checkersManager} />
    </div>
  );
}
