import { useContext } from 'react';
import { CheckersContext } from '../../context';
import { CheckerProps } from './CheckerProps';
import { compareArrays } from '../../utils';
import classes from './Checker.module.css';

export function MyChecker({ x, y }: CheckerProps) {
  const { selectedChecker, setSelectedChecker, setAllowedCells } =
    useContext(CheckersContext);

  const className = `${classes.checker} ${classes.white} ${
    classes.clickable
  } ${`${
    selectedChecker && compareArrays(selectedChecker, [x, y])
      ? classes.clicked
      : ''
  }`}`;

  const clickHandler = () => {
    setSelectedChecker([x, y]);
    setAllowedCells([
      [x - 1, y - 1],
      [x - 1, y + 1],
    ]);
  };

  return <div className={className} onClick={clickHandler}></div>;
}
