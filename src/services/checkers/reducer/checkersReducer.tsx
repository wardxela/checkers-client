import {
  CheckersState,
  CheckersStateAction,
  CheckersStateActionTypes,
} from './types';

export function checkersReducer<T extends CheckersStateActionTypes>(
  state: CheckersState,
  action: CheckersStateAction<T>
): CheckersState {
  const { type, payload } = action;
  switch (type) {
    case 'MOVE':
      const checkerToMove = state.find(
        checker => checker.x === payload.fromX && checker.y === payload.fromY
      )!;

      const movedChecker = {
        x: payload.toX,
        y: payload.toY,
        whose: checkerToMove.whose,
      };

      return [
        ...state.filter(checker => checker !== checkerToMove),
        movedChecker,
      ];

    default:
      return state;
  }
}
