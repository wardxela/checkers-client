import initCheckersInfo from '../../assets/json/initCheckersInfo.json';
import classes from './Playground.module.css';
import {
  CheckerStaticInfo,
  CheckersManager,
} from '../../services/checkers-manager';
import { genMatrixMemberID } from '../../utils';
import { Cell } from '../Cell/Cell';
import { useGameState } from '../../hooks';

export function Playground() {
  const gameState = useGameState(initCheckersInfo as CheckerStaticInfo[]);

  const cells: JSX.Element[] = [];
  const checkersManager = new CheckersManager(gameState.checkers);

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      cells.push(
        <Cell
          key={genMatrixMemberID(x, y)}
          x={x}
          y={y}
          checkersManager={checkersManager}
          gameState={gameState}
        />
      );
    }
  }

  return <div className={classes.field}>{cells}</div>;
}
