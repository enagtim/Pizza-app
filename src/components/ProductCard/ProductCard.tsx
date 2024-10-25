import { Link } from 'react-router-dom';
import { ProductCardProps } from './Product.props';
import styles from './ProductCard.module.css';
function ProductCard ( props : ProductCardProps) {
	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']}>
						<img src="/favorite-icon.svg" alt="Добавить в корзину" />
					</button>
					<div className={styles['rating']}>{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Иконка звезд" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.title}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
		
	);
}
export default ProductCard;