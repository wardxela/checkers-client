import {
  CheckerStaticInfo,
  Coords,
  Direction,
  OppositeDirections,
  Path,
} from './types';

const directions: Direction[] = ['tl', 'tr', 'bl', 'br'];
const oppositeDirections: OppositeDirections = {
  tl: 'br',
  tr: 'bl',
  bl: 'tr',
  br: 'tl',
};

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

  public hasCheckerAt(x: number, y: number): boolean {
    return !!this.findChecker(x, y);
  }

  public hasAllowedCells(x: number, y: number): boolean {
    return !!this.findAllowedCells(x, y).length;
  }

  public resolveAllowedCells(x: number, y: number): Coords[] {
    return this.findAllowedCells(x, y).map(pathOrCoords => {
      if (this.isPath(pathOrCoords)) {
        return pathOrCoords[pathOrCoords.length - 1];
      }
      return pathOrCoords;
    });
  }

  public findAllowedCells(
    x: number,
    y: number,
    excludeDirection?: Direction,
    onlyCheckers?: boolean
  ): (Coords | Path)[] {
    let allowedCells: (Coords | Path)[] = [];

    for (const direction of directions) {
      if (direction === excludeDirection) {
        continue;
      }

      allowedCells = allowedCells.concat(
        this.findAllowedCellsFromCorner(x, y, direction, onlyCheckers)
      );
    }

    return allowedCells;
  }

  private findAllowedCellsFromCorner(
    fromX: number,
    fromY: number,
    direction: Direction,
    onlyCheckers?: boolean
  ): (Coords | Path)[] {
    const [toX, toY] = this.findCoords(fromX, fromY, direction);
    const checker = this.findChecker(toX, toY);
    const allowedCells: (Coords | Path)[] = [];

    if (this.isOutOfPlayground(toX, toY)) {
      return allowedCells;
    }

    if (checker) {
      if (checker.whose === this.opponent) {
        const root = this.findCoords(toX, toY, direction);
        const [x, y] = root;
        const canMove =
          !this.hasCheckerAt(x, y) && !this.isOutOfPlayground(x, y);

        if (canMove) {
          const exclude = oppositeDirections[direction];
          const paths = this.findAllowedCells(x, y, exclude, true);
          allowedCells.push(root);
          for (const path of paths) {
            if (this.isPath(path)) {
              allowedCells.push([root, ...path]);
            } else {
              allowedCells.push([root, path]);
            }
          }
        }
      }
    } else {
      if (['tl', 'tr'].includes(direction) && !onlyCheckers) {
        allowedCells.push([toX, toY]);
      }
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

  private isOutOfPlayground(x: number, y: number): boolean {
    return x === -1 || x === 8 || y === -1 || y === 8;
  }

  private isPath(path: Coords | Path): path is Path {
    return typeof path[0] !== 'number';
  }
}
