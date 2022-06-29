import { GameState } from '../../../hooks';
import { Checker } from '../../Checker/Checker';
import classes from '../Cell.module.css';

interface CellWithCheckerProps {
  color: string;
  gameState: GameState;
  whose: string;
  x: number;
  y: number;
}

export function CellWithChecker({ color, ...props }: CellWithCheckerProps) {
  const styles = `${classes.cell} ${color}`;

  return (
    <div className={styles}>
      <Checker {...props} />
    </div>
  );
}
