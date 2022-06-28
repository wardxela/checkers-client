import initCheckersInfo from '../../assets/json/initCheckersInfo.json';
import classes from './Playground.module.css';
import { CheckerInfo, CheckersManager } from '../../services/checkers-manager';
import { compareArrays, genMatrixMemberID, isCellDark } from '../../utils';
import { CheckersContext } from '../../context';
import { Cell } from '../Cell/Cell';
import { useContext } from 'react';

export function Playground() {
  const { allowedCells } = useContext(CheckersContext);

  const cells: JSX.Element[] = [];
  const checkersManager = new CheckersManager(
    initCheckersInfo as CheckerInfo[]
  );

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const cellProps = {
        key: genMatrixMemberID(x, y),
        isDark: isCellDark(x, y),
        checkerInfo: checkersManager.find(x, y),
        allowed: !!allowedCells.find(cell => compareArrays(cell, [x, y])),
      };

      cells.push(<Cell {...cellProps} />);
    }
  }

  return <div className={classes.field}>{cells}</div>;
}
