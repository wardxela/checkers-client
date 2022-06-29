import {
  CheckersManager,
  CheckerStaticInfo,
} from '../../services/checkers-manager';

export interface CheckerProps {
  checkerStaticInfo: CheckerStaticInfo;
  checkersManager: CheckersManager;
}
