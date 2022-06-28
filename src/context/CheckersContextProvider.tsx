import { PropsWithChildren, useState } from 'react';
import { CheckersContext } from './CheckersContext';
import { Coords } from './types';

export function CheckersContextProvider({ children }: PropsWithChildren) {
  const [selectedChecker, setSelectedChecker] = useState<Coords>();
  const [allowedCells, setAllowedCells] = useState<Coords[]>([]);

  return (
    <CheckersContext.Provider
      value={{
        selectedChecker,
        setSelectedChecker,
        allowedCells,
        setAllowedCells,
      }}
    >
      {children}
    </CheckersContext.Provider>
  );
}
