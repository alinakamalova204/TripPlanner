import beach from './../../assets/image/beach.jpg'
import mountain from './../../assets/image/mountain.png'
import culture from './../../assets/image/culture.jpg'
import spa from './../../assets/image/spa.jpg'
import winter from './../../assets/image/winter.jpg'
import styles from './styles.module.sass'
const TypesOfTravel = () => {
    const travelTypes = [
        { type: 'Пляжный', image: beach },
        { type: 'Горный', image: mountain },
        { type: 'Культурно-исторический', image: culture },
        { type: 'Лечебно-оздоровительный', image: spa },
        { type: 'Зимний', image: winter }
    ];

    return (
        <div className={styles.galleryAll}>
            <h3>Уже знаешь какой вид отдыха тебе по душе?</h3>
            <div className={styles.gallery}>
                {travelTypes.map((travel, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.image} src={travel.image} alt={travel.type} />
                        <p className={styles.title}>{travel.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TypesOfTravel