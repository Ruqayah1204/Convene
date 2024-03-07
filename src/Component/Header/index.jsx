import styles from './header.module.css';
import logo from '../../images/convene.png';
import Button from '../Button';
import { AiOutlineGlobal } from "react-icons/ai";
// import InputField from '../inputs/InputField';

const Header = () => {
    return <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.img}/>
    
        {/* <div className={styles.searchWrap}>
            <InputField size="medium" placeholder="search" type="text" />
            <InputField size="medium" placeholder="Lagos, NG" type="text"/>
        </div> */}
        <div>
            <AiOutlineGlobal className={styles.netIcon}/>
            <span> English(Australia)</span>

        </div>
        <div className={styles.btnWrap}>
            <Button fullwidth="false" size="medium" variant='secondary'>Login</Button>
            <Button fullwidth="false" size="medium" variant='primary'>Sign Up</Button>
            
        </div>
    </div>
}
export default Header;