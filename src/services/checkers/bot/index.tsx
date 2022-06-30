import { CheckersManager, CheckerStaticInfo, Coords } from '../manager';

const anyNum = (from: number, to: number) => {
  return Math.round(Math.random() * (to - from)) + from;
};

export class BotOpponent {
  constructor(
    private readonly checkersInfo: CheckerStaticInfo[],
    private readonly checkersManager: CheckersManager,
    private readonly client: string,
    private readonly opponent: string
  ) {}

  public findAnyAvailableChecker(): CheckerStaticInfo {
    let i: number;
    let x: number;
    let y: number;

    const onlyOpponents = this.checkersInfo.filter(
      checker => checker.whose !== this.client
    );

    while (true) {
      i = anyNum(0, onlyOpponents.length - 1);
      ({ x, y } = onlyOpponents[i]);

      if (this.checkersManager.hasAllowedCells(x, y)) {
        return onlyOpponents[i];
      }
    }
  }

  public findAnyAllowedCell(x: number, y: number): Coords {
    const allowedCells = this.checkersManager.findAllowedCells(x, y);
    const i = anyNum(0, allowedCells.length - 1);
    return allowedCells[i];
  }
}
