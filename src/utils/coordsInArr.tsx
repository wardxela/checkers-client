import { Coords } from '../services/checkers/manager';
import { compareArrays } from './compareArrays';

export function coordsInArr(coords: Coords, coordsArr: Coords[]): boolean {
  return !!coordsArr.find(coords2 => compareArrays(coords, coords2));
}
