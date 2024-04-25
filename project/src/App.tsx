import React from 'react';
import './index.css';
// import { Switch } from 'react-router';
import Index from "./pages/Home";
import Home from "./pages/Home";
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/Register/SignIn";
import {SignUp} from "./pages/Register/SignUp";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import AllCountries from "./pages/AllCountries";
import Cities from "./pages/Cities";
import About from "./pages/About";


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
        element: <Index/>
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
                    <Route path="/cities/:countryId" Component={Cities} />
                    <Route path="/signin" Component={SignIn} />
                    <Route path="/signup" Component={SignUp} />
                    <Route path="/*" Component={NotFound}/>
                    <Route path="about" Component={About}/>
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
