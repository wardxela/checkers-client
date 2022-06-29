import initCheckersInfo from '../../assets/json/initCheckersInfo.json';
import classes from './Playground.module.css';
import { CheckerStaticInfo } from '../../services/checkers-manager';
import { genMatrixMemberID } from '../../utils';
import { Cell } from '../Cell/Cell';
import { useGameState } from '../../hooks';

export function Playground() {
  const gameState = useGameState(initCheckersInfo as CheckerStaticInfo[]);

  const cells: JSX.Element[] = [];

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const key = genMatrixMemberID(x, y);
      cells.push(<Cell key={key} x={x} y={y} gameState={gameState} />);
    }
  }

  return <div className={classes.field}>{cells}</div>;
}
