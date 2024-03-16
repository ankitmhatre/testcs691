import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';





function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="App">
      <header className="App-header">
      Pace Super Kings
      </header>
    </div>,
    
    },
  ]);

  return (
    <>
  <RouterProvider router={router} />
    </>
  );
}

export default App;
