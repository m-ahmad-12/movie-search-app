import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import MovieDetail from './pages/MovieDetail';
import Layout from "./components/layout";


function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  
    children: [
      { path: '/', element:   <Home/>},
{path: '/favorites', element:   <Favorites/>},
{path:'/movie/:id', element:<MovieDetail/>},
{path: '*', element:    <NotFound/>}
    ]
  }
])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
