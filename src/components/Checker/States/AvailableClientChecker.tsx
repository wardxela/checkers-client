import { CheckerProps } from '../CheckerProps';
import classes from '../Checker.module.css';

export function AvailableClientChecker({ gameState, x, y }: CheckerProps) {
  const { setHintCells, setSelectedChecker, checkersManager } = gameState;

  const styles = `${classes.checker} ${classes.white} ${classes.clickable}`;

  const selectChecker = () => {
    setSelectedChecker([x, y]);
    setHintCells(checkersManager.findAllowedCells(x, y));
  };

  return <div className={styles} onClick={selectChecker}></div>;
}
