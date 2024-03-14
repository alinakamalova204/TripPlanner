import './styles.sass'
const Header = () => {
    return (
        // <header className='header'>
        //     <div className='container'>
                <div className='header__row'>
                    <div className='header__logo'>
                        <span>TripPlanner</span>
                    </div>
                    <div className='header__nav'>
                        <ul>
                            <li>Главная</li>
                            <li>Мои планы</li>
                        </ul>
                    </div>
                </div>
        //     </div>
        // </header>
    )
}
export default Header