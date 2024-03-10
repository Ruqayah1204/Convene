import styles from './homeShowcase.module.css';
import showcaseImg from '../../images/showcaseImg.png';
import Button from '../Button';

const HomeShowcase = () => {
    return <div className={styles.wrapper}>
        <div className={styles.lead}>
            <h1>The people platform - Where interests become friendships.</h1>
            <p>Lorem ipsum dolor sit amet   conseciteur lorem lorem lorem ipsum lorem lorem</p>
            <Button fullwidth="false" size="medium">Join meetup</Button>
        </div>
        <div className={styles.imglead}>
        <img src={showcaseImg} alt="showcase pictures" />
        </div>
    </div>
};
export default HomeShowcase;