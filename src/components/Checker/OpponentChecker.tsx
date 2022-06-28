import classes from './Checker.module.css';
import { CheckerProps } from './CheckerProps';

export function OpponentChecker({}: CheckerProps) {
  const className = `${classes.checker} ${classes.black}`;

  return <div className={className}></div>;
}
