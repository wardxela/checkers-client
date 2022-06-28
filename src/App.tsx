import { Playground } from './components/Playground/Playground';
import { CheckersContextProvider } from './context';

export function App() {
  return (
    <CheckersContextProvider>
      <Playground />
    </CheckersContextProvider>
  );
}
