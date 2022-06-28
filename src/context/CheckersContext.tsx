import { createContext } from 'react';
import { ICheckersContext } from './types';

export const CheckersContext = createContext<ICheckersContext>(
  {} as ICheckersContext
);
