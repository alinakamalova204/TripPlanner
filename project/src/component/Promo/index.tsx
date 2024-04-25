import './styles.module.sass'
import promo from './../../assets/image/promo.jpg'
const Promo = () => {
    return (
        <div style={{ backgroundImage: promo, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%' }}>
            <h1>Путешествие</h1>
            <button>Начать искать</button>
        </div>
    )
}
export default Promo