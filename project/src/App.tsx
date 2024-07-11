import React, {useState} from 'react';
import './index.css';
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import AllCountries from "./pages/AllCountries";
import Cities from "./pages/Cities";
// import City from "./pages/City";
import {SignUp} from "./pages/Register/SignUp";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import typesOfTravel from "./component/TypesOfTravel";
import SignIn from "./pages/Register/SignIn";
import ScrollToTop from "./state/ScrollToTop";
import City from "./pages/City";
// import PlansWrapper from "./pages/Plans/PlansWrapper";
function App() {
    // const [travelPlan, setTravelPlan] = useState(null);
    //
    // const handleSaveTravelPlan = (plan) => {
    //     setTravelPlan(plan);
    // };
    return (
        <BrowserRouter>
            <div>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/plans" Component={Plans} />
                    <Route path="/allcountries" Component={AllCountries} />
                    <Route path="/allcountries/cities/:countryId" Component={Cities} />
                    <Route path="/cities/:countryId" Component={Cities} />
                    <Route path="/allcountries/cities/:countryId/city/:cityId" Component={City} />
                    <Route path="/cities/:countryId/city/:cityId" Component={City} />
                    {/*<Route path="/countries/:idTravel" element={<CountriesList travelTypes={typesOfTravel}/>} />*/}
                    <Route path="/signin" Component={SignIn} />
                    <Route path="/signup" Component={SignUp} />
                    <Route path="/*" Component={NotFound}/>
                    <Route path="/about" Component={About}/>

                    {/*<Route path="/city/:cityId">*/}
                    {/*    <City onSave={handleSaveTravelPlan} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/travel-plan">*/}
                    {/*    <Plans travelPlan={travelPlan} />*/}
                    {/*</Route>*/}
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
