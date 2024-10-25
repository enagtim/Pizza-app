import { forwardRef } from 'react';
import styles from './Search.module.css';
import { SearchProps} from './Search.props';
import cn from 'classnames';
const Search = forwardRef<HTMLInputElement, SearchProps>(function Search ({isValid = true, className, ...props}, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} className={cn(styles['input'], className, {
				[styles['invalid']]: isValid
			})}{...props}/>
			<img className={styles['icon']} src="public\search-icon.svg" alt="Иконка лупы" />
		</div>
	);
});
export default Search;