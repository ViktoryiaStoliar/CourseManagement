import Header from '../../components/Header/Header';
import style from './adminPage.module.scss'

const AdminPage = () => {
    return (
        <div>
            <Header />

            <div className={style.wrapper}>
                
                <div className={style.topWr}>
                    <p>Создание</p>
                    <p>Обновление</p>
                    <p>Удаление</p>
                </div>

                <div className={style.one}>
                    <p>Курс</p>
                    <input type="text" placeholder='Введите название курса' />
                </div>

                <div className={style.maimWr}>
                    <p>Описание</p>
                    <input type="text" placeholder='Введите описание курса' />

                    <div className={style.btn}>
                        <p>Применить</p>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default AdminPage;
