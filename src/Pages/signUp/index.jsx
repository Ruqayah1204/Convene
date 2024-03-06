import styles from './signup.module.css';
import Button from '../../Component/Button';
import {Form} from '../signin/login';
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";




const SignUpPage = () => {

    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.head}>Create Account</h1>
            <Form />
            <div className={styles.list}>
                <li>Already have an account? <span>Login</span></li>
            </div>
        
            <Button >Sign Up</Button>

            <div className={styles.footer}>
                <div>
                    <span>__________________</span>
                    <span className={styles.span}>OR</span>
                    <span>__________________</span>
                </div>
                <div className={styles.icon}>
                    <FcGoogle className={styles.big}/>
                    <FaFacebook className={styles.big}/>
                    <FaSquareXTwitter className={styles.big}/>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
}
export default SignUpPage;