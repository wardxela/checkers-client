import classes from './Checker.module.css';
import { CheckerProps } from './CheckerProps';

export function ClientChecker({
  checkerStaticInfo,
  checkersManager,
}: CheckerProps) {
  const { x, y } = checkerStaticInfo;
  let clickable = '';

  const allowedCells = checkersManager.getAllowedCells(x, y);

  if (allowedCells.length) {
    clickable = classes.clickable;
    console.log(allowedCells);
  }

  const styles = `${classes.checker} ${classes.white} ${clickable}`;

  return <div className={styles}></div>;
}
