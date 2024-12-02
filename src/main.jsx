import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './layouts/AddCoffe.jsx';
import UpdateCoffee from './layouts/UpdateCoffee.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import SignUp from './layouts/SignUp.jsx';
import Users from './layouts/Users.jsx';
import SignIn from './layouts/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-psi-ivory.vercel.app/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-psi-ivory.vercel.app/coffee/${params.id}`)
  },
  {
    path: "signup",
    element: <SignUp></SignUp>
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-psi-ivory.vercel.app/users')
  },
  {
    path: "signin",
    element: <SignIn></SignIn>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
