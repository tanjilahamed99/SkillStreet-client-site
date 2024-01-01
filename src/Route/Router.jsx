import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../Layout/Root';
import CreateNote from '../Pages/CreateNote';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createNote',
                element:<CreateNote></CreateNote>
            }
        ]
    }
])

export default Router;