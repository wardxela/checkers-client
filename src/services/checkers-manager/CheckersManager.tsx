import { CheckerStaticInfo, Coords } from './types';

export class CheckersManager {
  private data: CheckerStaticInfo[];
  private opponent: string;
  private client: string;

  constructor(initData: CheckerStaticInfo[] = []) {
    this.data = initData;
    this.opponent = 'opponent';
    this.client = 'mine';
  }

  public getChecker(x: number, y: number) {
    return this.data.find(checkerInfo => {
      return checkerInfo.x === x && checkerInfo.y === y;
    });
  }

  public getAllowedCells(x: number, y: number) {
    let allowedCells: Coords[] = [];

    // left-top corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x - 1, y - 1)
    );

    // right-top corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x - 1, y + 1)
    );

    // left-bottom corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x + 1, y - 1)
    );

    // right-bottom corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x + 1, y + 1)
    );

    return allowedCells;
  }

  private getAllowedCellsFromCorner(x: number, y: number): Coords[] {
    const checker = this.getChecker(x, y);
    const allowedCells: Coords[] = [];

    const isOutOfPlayground = x === -1 || x === 8 || y === -1 || y === 8;

    if (isOutOfPlayground) {
      return allowedCells;
    }

    if (checker) {
      if (checker.whose === this.opponent) {
      }
    } else {
      allowedCells.push([x, y]);
    }

    return allowedCells;
  }
}
