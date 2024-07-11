// import {useState} from "react";
//
// interface TravelPlanProps {
//     travelPlan: {
//         city: string;
//         date: string;
//         imageCity: string;
//     };
// }
//
// const Plans: React.FC<TravelPlanProps> = ({ travelPlan }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedTravelPlan, setEditedTravelPlan] = useState(travelPlan);
//
//     const handleEdit = () => {
//         setIsEditing(true);
//     };
//
//     const handleSave = () => {
//         setIsEditing(false);
//     };
//
//     const handleDelete = () => {
//         // Здесь должна быть логика удаления плана путешествия
//     };
//
//     if (!travelPlan) {
//         return <p>Нет сохраненного плана путешествия</p>;
//     }
//
//     return (
//         // <div>
//         //     <div>
//         //         <p>Город: {editedTravelPlan.city}</p>
//         //         <p>Дата: {editedTravelPlan.date}</p>
//         //         <button onClick={handleEdit}>Изменить</button>
//         //         {isEditing && (
//         //             <>
//         //                 <button onClick={handleSave}>Сохранить</button>
//         //                 <button onClick={handleDelete}>Удалить</button>
//         //             </>
//         //         )}
//         //         <img src={editedTravelPlan.imageCity} alt={editedTravelPlan.city} />
//         //     </div>
//         // </div>
//     );
// };
//
// export default Plans;
import Footer from "../../component/Footer";
import maldives from './../../assets/image/maldivesjpg.jpg'
import mos from './../../assets/image/Moscow.jpg'
import ist from './../../assets/image/istanbul.jpg'
import sankt from './../../assets/image/sankt.jpg'
import styles from './styles.module.sass'
import Header from "../../component/Header";
const Plans = () => {
    return (
        <div>
            <Header/>
            Мои планы
            <div className={styles.card}>
                <div className={styles.details}>
                    <p>Количество путешественников: 2</p>
                    <p>Страна: Россия</p>
                    <p>Город: Москва</p>
                    <p>Дата: 10.10.2024-20.10.2024</p>
                    <p>Город вылета: Казань</p>

                </div>
                <img className={styles.img} src={mos} alt={mos}/>
            </div>



            <div className={styles.card}>
                <div className={styles.details}>
                    <p>Количество путешественников: 2</p>
                    <p>Страна: Турция</p>
                    <p>Остров: Стамбул</p>
                    <p>Дата: 10.09.2024-20.09.2024</p>
                    <p>Город вылета: Казань</p>

                </div>
                <img className={styles.img} src={ist} alt={maldives}/>
            </div>

            <div className={styles.card}>
                <div className={styles.details}>
                    <p>Количество путешественников: 2</p>
                    <p>Страна: Россия</p>
                    <p>Город: Санкт-Петербург</p>
                    <p>Дата: 10.10.2024-20.10.2024</p>
                    <p>Город вылета: Рязань</p>

                </div>
                <img className={styles.img} src={sankt} alt={sankt}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Plans