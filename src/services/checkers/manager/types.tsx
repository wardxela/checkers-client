export interface CheckerStaticInfo {
  x: number;
  y: number;
  whose: 'mine' | 'opponent';
  isKing?: boolean;
}

export type Coords = [number, number];

export type Direction = 'tl' | 'tr' | 'bl' | 'br';
