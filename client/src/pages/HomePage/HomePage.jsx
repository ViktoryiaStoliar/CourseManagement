import Header from '../../components/Header/Header';
import style from './homePage.module.scss';

const HomePage = () => {

    const array = [
        { id: 1, header: "C#Couse", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
        { id: 2, header: "JavaScript Course", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
        { id: 3, header: "C#Couse", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
        { id: 4, header: "JavaScript Course", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
        { id: 5, header: "C#Couse", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
        { id: 6, header: "JavaScript Course", description: "В течение курса студенты ознакомятся с ...", location: "Минск" },
    ]

    return (
        <div>
            <Header />

            <div className={style.search}>
                <div className={style.inputWr}>
                    <input type="text" placeholder='Введите название курса' />
                    <div className={style.btn}>Поиск</div>
                </div>

                <div className={style.courseWrapper}>
                    {array.map((el, index) => (
                        <div className={style.course} key={index}>
                            <h3>{el.header}</h3>
                            <p>{el.description}</p>
                            <p>{el.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
