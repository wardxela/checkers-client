import { AvailableClientChecker } from './AvailableClientChecker';
import { NotAvailableClientChecker } from './NotAvailableClientChecker';
import { CheckerProps } from '../CheckerProps';

export function ClientChecker(props: CheckerProps) {
  const { x, y } = props.checkerStaticInfo;

  const allowedCells = props.checkersManager.getAllowedCells(x, y);

  if (allowedCells.length) {
    return <AvailableClientChecker {...props} />;
  }

  return <NotAvailableClientChecker />;
}
