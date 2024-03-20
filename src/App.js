import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import Ankit from './Ankit';
import Temp from './Temp';





function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage />,
    
    },
    {
      path: "/ankit",
      element: <Ankit />,
    
    },
    {
      path: "/temporary",
      element: <Temp />,
    
    }

  ]);

  return (
    <>
  <RouterProvider router={router} />
    </>
  );
}

export default App;
