import { CheckerInfo } from '../../services/checkers-manager';
import { Checker } from '../Checker/Checker';
import classes from './Cell.module.css';

interface CellProps {
  isDark: boolean;
  checkerInfo?: CheckerInfo;
  allowed: boolean;
}

export function Cell({ isDark, checkerInfo, allowed }: CellProps) {
  const color = isDark ? classes.dark : classes.light;

  return (
    <div className={`${classes.cell} ${color} ${allowed ? classes.tip : ''}`}>
      {checkerInfo && <Checker {...checkerInfo} />}
    </div>
  );
}
