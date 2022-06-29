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

  public getChecker(x: number, y: number) {
    return this.data.find(checkerInfo => {
      return checkerInfo.x === x && checkerInfo.y === y;
    });
  }

  public getAllowedCells(x: number, y: number) {
    let allowedCells: Coords[] = [];

    // top-left corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x, y, 'tl')
    );

    // top-right corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x, y, 'tr')
    );

    // bottom-left corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x, y, 'bl')
    );

    // bottom-right corner
    allowedCells = allowedCells.concat(
      this.getAllowedCellsFromCorner(x, y, 'br')
    );

    return allowedCells;
  }

  private getAllowedCellsFromCorner(
    fromX: number,
    fromY: number,
    direction: Direction
  ): Coords[] {
    const [toX, toY] = this.getCoords(fromX, fromY, direction);
    const checker = this.getChecker(toX, toY);
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

  private getCoords(x: number, y: number, direction: Direction): Coords {
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
