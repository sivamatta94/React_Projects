import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Category /> }
  ])
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
