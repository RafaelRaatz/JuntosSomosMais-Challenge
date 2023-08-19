import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { createServer } from 'miragejs'
import members from '../assets/users.json'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/members', () => {
      return members;
    })
  },
})

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
