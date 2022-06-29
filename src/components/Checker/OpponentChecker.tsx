import classes from './Checker.module.css';

export function OpponentChecker() {
  const className = `${classes.checker} ${classes.black}`;

  return <div className={className}></div>;
}
