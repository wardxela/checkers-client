import { CheckerInfo } from './types';

export class CheckersManager {
  private data: CheckerInfo[];
  constructor(initData: CheckerInfo[] = []) {
    this.data = initData;
  }

  find(x: number, y: number) {
    return this.data.find(checkerInfo => {
      return checkerInfo.x === x && checkerInfo.y === y;
    });
  }
}
