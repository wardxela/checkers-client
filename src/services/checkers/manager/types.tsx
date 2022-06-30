export interface CheckerStaticInfo {
  x: number;
  y: number;
  whose: 'mine' | 'opponent';
  isKing?: boolean;
}

export type Coords = [number, number];
export type Path = Coords[];

interface DirectionsMap {
  tl: any;
  tr: any;
  bl: any;
  br: any;
}

export type Direction = keyof DirectionsMap;

export type OppositeDirections = {
  [Property in keyof DirectionsMap]: Direction;
};
