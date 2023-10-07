import style from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className={style.conteiner}>
                <h1>CoursesRUD.</h1>
                <div className={style.ref}>
                    <p><Link to={'/admin'}>Администрирование</Link></p>
                    <p><Link to={'/'}>Просмотр</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Header;
