import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
