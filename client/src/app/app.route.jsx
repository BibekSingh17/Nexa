import {createBrowserRouter} from 'react-router'
import Login from '../feature/auth/Page/Login'
import Register from '../feature/auth/Page/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home Page</h1>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
    
])