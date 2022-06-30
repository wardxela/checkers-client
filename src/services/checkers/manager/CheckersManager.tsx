import { CheckerStaticInfo, Coords, Direction } from './types';

export class CheckersManager {
  private readonly data: CheckerStaticInfo[];
  private opponent: string;
  private client: string;

  constructor(initData: CheckerStaticInfo[] = []) {
    this.data = initData;
    this.opponent = 'opponent';
    this.client = 'mine';
  }

  public findChecker(x: number, y: number) {
    return this.data.find(checkerInfo => {
      return checkerInfo.x === x && checkerInfo.y === y;
    });
  }

  public hasAllowedCells(x: number, y: number): boolean {
    return !!this.findAllowedCells(x, y).length;
  }

  public findAllowedCells(x: number, y: number) {
    let allowedCells: Coords[] = [];

    // top-left corner
    allowedCells = allowedCells.concat(
      this.findAllowedCellsFromCorner(x, y, 'tl')
    );

    // top-right corner
    allowedCells = allowedCells.concat(
      this.findAllowedCellsFromCorner(x, y, 'tr')
    );

    // bottom-left corner
    allowedCells = allowedCells.concat(
      this.findAllowedCellsFromCorner(x, y, 'bl')
    );

    // bottom-right corner
    allowedCells = allowedCells.concat(
      this.findAllowedCellsFromCorner(x, y, 'br')
    );

    return allowedCells;
  }

  private findAllowedCellsFromCorner(
    fromX: number,
    fromY: number,
    direction: Direction
  ): Coords[] {
    const [toX, toY] = this.findCoords(fromX, fromY, direction);
    const checker = this.findChecker(toX, toY);
    const allowedCells: Coords[] = [];

    const isOutOfPlayground =
      toX === -1 || toX === 8 || toY === -1 || toY === 8;

    if (isOutOfPlayground) {
      return allowedCells;
    }

    if (checker) {
      if (checker.whose === this.opponent) {
        // allowedCells.push(getAllowedCellsFromCorner(toX, toY));
      }
    } else {
      allowedCells.push([toX, toY]);
    }

    return allowedCells;
  }

  private findCoords(x: number, y: number, direction: Direction): Coords {
    switch (direction) {
      case 'tl':
        return [x - 1, y - 1];
      case 'tr':
        return [x - 1, y + 1];
      case 'bl':
        return [x + 1, y - 1];
      case 'br':
        return [x + 1, y + 1];
    }
  }
}
