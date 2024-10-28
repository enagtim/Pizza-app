import styles from './Inpute.module.css';
function Input({ ...props }) {
    return <input {...props} className={styles['input-wrapper']}></input>;
}
export default Input;