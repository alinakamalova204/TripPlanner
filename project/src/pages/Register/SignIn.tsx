import {useState} from "react";
import * as Yup from 'yup'
import styles from "./styles.module.sass";
import {Link} from "react-router-dom";
import {FaEnvelope, FaTelegram} from "react-icons/fa";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    function validateForm() {
        let errors = {email, password}
        if (!email) {
            errors.email = 'Обязательное поле';
        }
        if (!password) {
            errors.password = '<PASSWORD>';
        }
        return Object.keys(errors).length === 0 ? null : errors;
    }
    async function handleSubmit(event: any) {
        event.preventDefault();
        const error = validateForm();
        if (error) {
            setErrors(error);
        } else {
            // Здесь может быть код для отправки данных на сервер
            setIsSubmitted(true);
        }
    }

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                 <h1>Планируем путшествия вместе с TripPlanner</h1>
                 <span>Воплощаем мечты о путешествиях в жизнь</span>
                 <a href={'https://www.google.com/intl/ru/gmail/about/'}><FaTelegram className={styles.icon}/><span> Чат поддержки</span></a>
                 <a href={'https://web.telegram.org'}><FaEnvelope className={styles.icon}/><span> support@tripplanner.ru</span></a>
            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.title}>Вход в TripPlanner</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <input
                        className={styles.input}
                        id="email"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder={'Введите email'}
                    />

                    <input
                        className={styles.input}
                        id="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder={'Введите пароль'}
                    />


                </form>
                <button className={styles.button} type="submit"><Link to={"/plans"} className={styles.link_btn}>Войти</Link></button>
                {isSubmitted && <p>Данные успешно отправлены</p>}
                <h5 className={styles.info}>Нет аккаунта? <Link to={"/signup"} className={styles.link}>Зарегистрироваться</Link></h5>

            </div>
        </div>
    )

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = () => {
    //     // e.preventDefault();
    //     //код для отправки данных на сервер
    // }
    //
    // return (
    //     <div className={styles.form}>
    //         <div className={styles.logo}>
    //             <h1>Планируем путшествия вместе с TripPlanner</h1>
    //             <span>Воплощаем мечты о путешествиях в жизнь</span>
    //             <a href={'https://www.google.com/intl/ru/gmail/about/'}><FaTelegram className={styles.icon}/><span> Чат поддержки</span></a>
    //             <a href={'https://web.telegram.org'}><FaEnvelope className={styles.icon}/><span> support@tripplanner.ru</span></a>
    //         </div>
    //         <div className={styles.formContainer}>
    //             <h1 className={styles.title}>Вход в TripPlanner</h1>
    //             <form className={styles.form} onSubmit={handleSubmit}>
    //
    //                 <input className={styles.input} type={'text'} name={'email'} value={email}
    //                        onChange={(e) => setEmail(e.target.value)}
    //                        placeholder={'Введите email'}
    //                 />
    //
    //                 <input className={styles.input} type={'password'} name={'password'} value={password}
    //                        onChange={(e) => setPassword(e.target.value)}
    //                        placeholder={'Введите пароль'}
    //                 />
    //
    //                 <br/>
    //             </form>
    //             <br/>
    //             <Link to={'/Plans'}>
    //                 <button className={styles.button}>Войти</button>
    //             </Link>
    //             <h5 className={styles.info}>Нет аккаунта? <Link to={"/signup"} className={styles.link}>Зарегистрироваться</Link>
    //
    //             </h5>
    //         </div>
    //     </div>
    // );
};
export default SignIn