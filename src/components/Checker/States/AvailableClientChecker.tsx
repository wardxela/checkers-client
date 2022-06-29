import { CheckerProps } from '../CheckerProps';
import classes from '../Checker.module.css';

export function AvailableClientChecker({
  checkerStaticInfo,
  checkersManager,
  gameState,
}: CheckerProps) {
  const { x, y } = checkerStaticInfo;
  const { setHintCells, setSelectedChecker } = gameState;

  const styles = `${classes.checker} ${classes.white} ${classes.clickable}`;

  const selectChecker = () => {
    setSelectedChecker([x, y]);
    setHintCells(checkersManager.getAllowedCells(x, y));
  };

  return <div className={styles} onClick={selectChecker}></div>;
}
