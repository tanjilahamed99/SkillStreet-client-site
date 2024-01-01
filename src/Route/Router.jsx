import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../Layout/Root';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/',
            //     element:
            // }
        ]
    }
])

export default Router;