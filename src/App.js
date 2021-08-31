import React from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from '../src/components/Board';
import Header from '../src/components/Header';
import Global from './src/styles/global';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Header />
    <Board />
    <Global />
    </DndProvider>
  );
}

export default App;
