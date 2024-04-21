import React from 'react';
import './index.css';
// import { Switch } from 'react-router';
import Index from "./Pages/Home";
import Home from "./Pages/Home";
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./Pages/Register/SignIn";
import {SignUp} from "./Pages/Register/SignUp";
import Plans from "./Pages/Plans/Plans";
import NotFound from "./Pages/NotFound";
import AllCountries from "./Pages/AllCountries";
import Cities from "./Pages/Cities";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/allcountries",
        element: <AllCountries/>,
        children: [
            {
                path: ":id",
                element: <Cities />,

            },
        ]
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/plans",
        element: <Plans/>
    },
    {
        path: "/*",
        element: <NotFound/>
    }
])
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/plans" Component={Plans} />
                    <Route path="/allcountries" Component={AllCountries} />
                    <Route path="/allcountries/:id/cities" Component={Cities} />
                    <Route path="/signin" Component={SignIn} />
                    <Route path="/signup" Component={SignUp} />
                    <Route path="/*" Component={NotFound}/>
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
