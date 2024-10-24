import { Link, Outlet } from 'react-router-dom';
import styles from './LayoutMenu.module.css';
import Button from '../../../components/Button/Button';
export function LayoutMenu(){
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>	
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/Avatar.png" alt="Иконка пользователя" />
					<div className={styles['name']}>Никита Каберов</div>
					<div className={styles['email']}>enagtim@mail.ru</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src="/menu-icon.svg" alt="Иконка меню" />
					Меню</Link>
					<Link to='/cart'className={styles['link']}>
						<img src="/cart-icon.svg" alt="Иконка корзины" />
					
					Корзина</Link>
				</div>
				<Button className={styles['exit']}>
					<img src="/exit-icon.svg" alt="Иконка выхода" />
					Выход
				</Button>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
}