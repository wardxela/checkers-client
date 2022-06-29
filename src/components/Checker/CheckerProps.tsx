import { GameState } from '../../hooks';
import {
  CheckersManager,
  CheckerStaticInfo,
} from '../../services/checkers-manager';

export interface CheckerProps {
  checkerStaticInfo: CheckerStaticInfo;
  checkersManager: CheckersManager;
  gameState: GameState;
}
