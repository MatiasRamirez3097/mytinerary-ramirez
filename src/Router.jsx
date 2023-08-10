import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index, Cities } from './pages'
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
                path: '*',
                element: <Cities />
            }
        ]
    }
]);

const Router = () => {
    return <RouterProvider router={Routes} />
}

export default Router