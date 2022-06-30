import { MouseEventHandler } from 'react';
import { GameState } from '../../../services/checkers/hooks';
import { coordsInArr } from '../../../utils';
import classes from '../Cell.module.css';

interface CellWithoutCheckerProps {
  gameState: GameState;
  color: string;
  x: number;
  y: number;
}

export function CellWithoutChecker(props: CellWithoutCheckerProps) {
  const { color, gameState, x, y } = props;
  const { hintCells, selectedChecker, setCanMove, setHintCells, dispatch } =
    gameState;

  const hintColor = coordsInArr([x, y], hintCells) ? classes.hint : '';
  const styles = `${classes.cell} ${color} ${hintColor}`;
  let makeMove: MouseEventHandler | undefined = undefined;

  if (coordsInArr([x, y], hintCells)) {
    makeMove = () => {
      const [fromX, fromY] = selectedChecker!;
      dispatch({
        type: 'MOVE',
        payload: {
          fromX,
          fromY,
          toX: x,
          toY: y,
        },
      });
      // setCanMove(false);
      setHintCells([]);
    };
  }

  return <div className={styles} onClick={makeMove}></div>;
}
