import Footer from "../../component/Footer";
import {Link} from "react-router-dom";
import TypesOfTravel from "../../component/TypesOfTravel";
import Header from "../../component/Header";
import PopularDestination from "../../component/PopularDestinations";
import Promo from "../../component/Promo";


const Home = () => {
    return (
        <div>
            <Header/>
            <Promo/>
            <PopularDestination/>
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