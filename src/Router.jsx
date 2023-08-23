import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index, Cities, City } from './pages'
import { MainLayout } from './layouts';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/city/:id',
                element: <City />
            },
            {
                path: '*',
                element: <p>Ups</p>
            }
        ]
    }
]);

const Router = () => {
    return <RouterProvider router={Routes} />
}

export default Router