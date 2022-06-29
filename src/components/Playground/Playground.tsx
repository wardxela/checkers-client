import initCheckersInfo from '../../assets/json/initCheckersInfo.json';
import classes from './Playground.module.css';
import {
  CheckerStaticInfo,
  CheckersManager,
} from '../../services/checkers-manager';
import { genMatrixMemberID } from '../../utils';
import { Cell } from '../Cell/Cell';

export function Playground() {
  const cells: JSX.Element[] = [];
  const checkersManager = new CheckersManager(
    initCheckersInfo as CheckerStaticInfo[]
  );

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      cells.push(
        <Cell
          key={genMatrixMemberID(x, y)}
          x={x}
          y={y}
          checkersManager={checkersManager}
        />
      );
    }
  }

  return <div className={classes.field}>{cells}</div>;
}
