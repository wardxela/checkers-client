import { AvailableClientChecker } from './AvailableClientChecker';
import { NotAvailableClientChecker } from './NotAvailableClientChecker';
import { CheckerProps } from '../CheckerProps';

export function ClientChecker(props: CheckerProps) {
  const hasAllowedCells = props.gameState.checkersManager.hasAllowedCells(
    props.x,
    props.y
  );

  if (hasAllowedCells && props.gameState.canMove) {
    return <AvailableClientChecker {...props} />;
  }

  return <NotAvailableClientChecker />;
}
