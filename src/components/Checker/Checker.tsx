import { CheckerProps } from './CheckerProps';
import { MyChecker } from './MyChecker';
import { OpponentChecker } from './OpponentChecker';

export function Checker(props: CheckerProps) {
  if (props.whose === 'mine') {
    return <MyChecker {...props} />;
  }

  return <OpponentChecker {...props} />;
}
