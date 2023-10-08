import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import style from './adminPage.module.scss';
import { useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from '../../service/serviceCourse';

const AdminPage = () => {

    const [opt, setOpt] = useState("Создание");
    const [inp, setInp] = useState({});
    const [createCourse] = useCreateCourseMutation();
    const [updateCourse] = useUpdateCourseMutation();
    const [deleteCourse] = useDeleteCourseMutation();

    useEffect(() => {
        setInp({})
    }, [opt])

    const changeOpt = (e) => {
        setOpt(e.target.textContent)
    }

    const getInpData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        // console.log(inp);
        if (opt === 'Создание') {
            const data = await createCourse(inp);
            console.log(data);
            window.location.reload()
        } else if (opt === 'Обновление') {
            const data = await updateCourse(inp);
            console.log(data);
            window.location.reload()
        } else if (opt === 'Удаление') {
            const data = await deleteCourse(inp);
            console.log(data);
            window.location.reload()
        }
    }

    const showContent = () => {
        if (opt === 'Создание') {

            return (
                <>
                    <div className={style.one}>
                        <input
                            onChange={getInpData}
                            value={inp?.header || ''}
                            name="header"
                            placeholder="Введите название курса" />
                    </div>

                    <div className={style.two}>
                        <input
                            onChange={getInpData}
                            value={inp?.description || ''}
                            name="description"
                            placeholder="Введите описание курса" />
                    </div>

                    <div className={style.one}>
                        <input
                            onChange={getInpData}
                            value={inp?.location || ''}
                            name="location"
                            placeholder="Введите город" />
                    </div>
                </>
            )
        } else if (opt === 'Обновление') {

            return (
                <>
                    <div className={style.one}>
                        <input
                            onChange={getInpData}
                            value={inp?.header || ''}
                            name="header"
                            placeholder="Введите название курса" />
                    </div>

                    <div className={style.two}>
                        <input
                            onChange={getInpData}
                            value={inp?.description || ''}
                            name="description"
                            placeholder="Введите описание курса" />
                    </div>

                    <div className={style.one}>
                        <input
                            onChange={getInpData}
                            value={inp?.location || ''}
                            name="location"
                            placeholder="Введите город" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            value={inp?.id || ''}
                            name="id"
                            placeholder="Введите ID" />
                    </div>
                </>)
        } else if (opt === 'Удаление') {

            return (
                <>
                    <div className={style.one}>
                        <input
                            onChange={getInpData}
                            value={inp?.id || ''}
                            name="id"
                            placeholder="Введите ID" />
                    </div>
                </>)
        }
    }

    return (
        <>
            <Header />

            <div className={style.wrapper}>

                <div className={style.topWr}>
                    <p onClick={changeOpt} className={style.blue}>Создание</p>
                    <p onClick={changeOpt}>Обновление</p>
                    <p onClick={changeOpt}>Удаление</p>
                </div>

                {/* <div className={style.one}>
                    <p>Курс</p>
                    <input type="text" placeholder='Введите название курса' />
                </div> */}

                {showContent()}

                {/* <div className={style.two}>
                    <p>Описание</p>
                    <input type="text" placeholder='Введите описание курса' /> */}

                <div onClick={sendData} className={style.btn}>Применить</div>
            </div>
        </ >
    );
}

export default AdminPage;

