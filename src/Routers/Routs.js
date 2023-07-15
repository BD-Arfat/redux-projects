import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine"
import Home from "../Components/Pagses/Home/Home";
// import Products from "../Components/Pagses/Products/Products";
import AddVideo from "../Components/AddVideo/AddVideo";
import Edits from '../Components/Edits/Edits'
import Longi from "../Components/Login/Longi";
import Register from "../Components/Register/Register";
import Products from "../Components/Pagses/Products/Products";
import PrivetRouter from "../Components/PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/products',
                element : <PrivetRouter><Products/></PrivetRouter>
            },
            {
                path : '/addVideo',
                element : <PrivetRouter><AddVideo/></PrivetRouter>
            },
            {
                path : '/login',
                element : <Longi/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/editVideo/:id',
                element : <Edits/>,
                loader : ({params})=>fetch(`https://redux-server-bd-arfat-bd-arfat-s-team.vercel.app/products/${params.id}`)
            }
        ]
    }
])