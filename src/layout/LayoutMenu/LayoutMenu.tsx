import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './LayoutMenu.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
export function LayoutMenu() {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('jwt');
		navigate('/auth/login');

	};
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/Avatar.png" alt="Иконка пользователя" />
					<div className={styles['name']}>Никита Каберов</div>
					<div className={styles['email']}>enagtim@mail.ru</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to='/' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/menu-icon.svg" alt="Иконка меню" />
						Меню</NavLink>
					<NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/cart-icon.svg" alt="Иконка корзины" />

						Корзина</NavLink>
				</div>
				<Button onClick={logout} className={styles['exit']}>
					<img src='/exit-icon.svg' alt="Иконка выхода" />
					Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}