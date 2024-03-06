import styles from './login.module.css';
import InputField from '../../Component/inputs/InputField';
import Button from '../../Component/Button';

const LoginPage = () => {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.head}>Welcome</h1>
            <Form />
            <ul className={styles.list}>
                <li>Create Account</li>
                <li>Forgot Password?</li>
            </ul>
            
            <Button >Log In</Button>
            
        </div>
        
    </div>
}
export default LoginPage;




export const Form = function(){
    return <form>
        <InputField type="text" placeholder="Username" id="username" />
        <InputField type="password" placeholder="Password" id="username" />
    </form>
}