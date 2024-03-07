import styles from './inputs.module.css';

const InputField = ({
    fullwidth=true,
    size,
    placeholder,
    id,
    type,
}) => {
    return <input data-size={size} type={type} placeholder={placeholder} id={id} className={styles.input} />
}
export default InputField;