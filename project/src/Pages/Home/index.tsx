import PopularDestinations from "../../Component/PopularDestinations/PopularDestinations";
import Footer from "../../Component/Footer";
import {Link} from "react-router-dom";
import TypesOfTravel from "../../Component/TypesOfTravel";
import Header from "../../Component/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <PopularDestinations/>
            <Link to="/allcountries">
                <button type="button">Посмотреть все страны</button>
            </Link>
            <TypesOfTravel/>
            {/*<MapComponent/>*/}
            <Footer/>
        </div>
    )
}
export default Home