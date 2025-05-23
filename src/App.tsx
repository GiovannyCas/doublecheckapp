import {createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from "react-router-dom";
import './App.css'
import LoginPage from "@/pages/login/page.tsx";
import SignUpPage from "@/pages/signup/page.tsx";

import HomePage from "@/pages/home/page.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} >
            <Route index element={<LoginPage />}/>
            <Route path={'/signup'} element={<SignUpPage />}/>
            <Route path={'/home'} element={<HomePage/>}/>
            
        </Route>

    )
)


function App() {


    return (
        <>
            <div >
                <RouterProvider router={router}/>
            </div>

        </>
    )
}

export default App
