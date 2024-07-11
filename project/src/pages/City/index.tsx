import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.sass';
import Header from '../../component/Header';
import {allCountries} from "../AllCountries/data";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../../component/Footer";
interface City {
    id: string;
    name: string;
    imageCity: string;
    description?: string;
}

const City = () => {
    const { cityId } = useParams<{ cityId: string }>(); // Получаем cityId из URL
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Находим выбранный город в списке всех стран
    const selectedCity: City | undefined = allCountries
        .map(country => country.cities)
        .flat()
        .find(city => city.id === cityId);

    if (!selectedCity) {
        return <div>Город не найден</div>;
    }

    const handleSave = () => {
        // Ваша логика сохранения выбранной даты
        console.log('Выбранная дата начала:', startDate);
        console.log('Выбранная дата конца:', endDate);
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>{selectedCity.name}</h1> {/* Отображаем название выбранного города */}
                <img src={selectedCity.imageCity} alt={selectedCity.name} />
                <p>{selectedCity.description}</p> {/* Отображаем описание выбранного города */}
                <div className={styles.datePickerContainer}>
                    <p className={styles.dateText}>С</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Начальная дата"
                        className={styles.datePicker}
                    />
                    <p className={styles.dateText}> по </p>
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Конечная дата"
                        className={styles.datePicker}
                    />
                    <button onClick={handleSave} className={styles.saveButton}>Сохранить</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default City;
