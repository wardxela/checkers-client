import { CheckerProps } from './CheckerProps';
import { ClientChecker } from './States/ClientChecker';
import { OpponentChecker } from './States/OpponentChecker';

export function Checker(props: CheckerProps) {
  if (props.checkerStaticInfo.whose === 'mine') {
    return <ClientChecker {...props} />;
  }

  return <OpponentChecker />;
}
