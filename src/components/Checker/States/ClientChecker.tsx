import { AvailableClientChecker } from './AvailableClientChecker';
import { NotAvailableClientChecker } from './NotAvailableClientChecker';
import { CheckerProps } from '../CheckerProps';

export function ClientChecker(props: CheckerProps) {
  const allowedCells = props.gameState.checkersManager.getAllowedCells(
    props.x,
    props.y
  );

  if (allowedCells.length) {
    return <AvailableClientChecker {...props} />;
  }

  return <NotAvailableClientChecker />;
}
