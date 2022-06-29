import { CheckerStaticInfo } from '../../services/checkers-manager';

interface CheckersMovePayload {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

interface CheckersPayloadMap {
  MOVE: CheckersMovePayload;
}

export type CheckersStateActionTypes = 'MOVE';

export interface CheckersStateAction<T extends CheckersStateActionTypes> {
  type: T;
  payload: CheckersPayloadMap[T];
}

export type CheckersState = CheckerStaticInfo[];
