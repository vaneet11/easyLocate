import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './Routes';

function App() {
  return (
    <RouterProvider router={routing} />
  );
}

export default App;
