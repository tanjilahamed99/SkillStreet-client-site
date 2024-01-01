import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../Layout/Root';
import CreateNote from '../Pages/CreateNote';
import Trash from '../Pages/Trash';
import UpdateNote from '../Pages/UpdateNote';

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
                element: <CreateNote></CreateNote>
            },
            {
                path: '/trash',
                element: <Trash></Trash>
            },
            {
                path:'/updateNote/:id',
                element:<UpdateNote></UpdateNote>,
            }
        ]
    }
])

export default Router;