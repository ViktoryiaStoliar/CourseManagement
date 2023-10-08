import Header from '../../components/Header/Header';
import style from './homePage.module.scss';
import { useGetAllCourseQuery } from '../../service/serviceCourse';

const HomePage = () => {

    const { data } = useGetAllCourseQuery();
    console.log(data);

    return (
        <div>
            <Header />

            <div className={style.search}>
                <div className={style.inputWr}>
                    <input type="text" placeholder='Введите название курса' />
                    <div className={style.btn}>Поиск</div>
                </div>

                <div className={style.courseWrapper}>
                    {data?.map((el, index) => (
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
