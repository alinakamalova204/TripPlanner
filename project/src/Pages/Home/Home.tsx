import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import PopularDestinations from "../../Component/PopularDestinations/PopularDestinations";
import Promo from "../../Component/Promo/Promo";

const Home = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <PopularDestinations/>

            <Footer/>
        </>
    )
}
export default Home