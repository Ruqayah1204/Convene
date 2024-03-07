import styles from './button.module.css';
const Button = ({
    variant = "primary", 
    fullwidth = true,
    size = "medium",
    children}) => {
        
    return <button 
        className={styles.btn} 
        data-variant={variant} 
        data-fullwidth={fullwidth} 
        data-size ={size}>
        {children}
    </button>
}
export default Button;