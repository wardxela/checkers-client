import { CheckerProps } from './CheckerProps';
import { ClientChecker } from './ClientChecker';
import { OpponentChecker } from './OpponentChecker';

export function Checker(props: CheckerProps) {
  if (props.checkerStaticInfo.whose === 'mine') {
    return <ClientChecker {...props} />;
  }

  return <OpponentChecker />;
}
