import styles from './post.module.css';
import event1 from '../../images/convene-jpeg1.jpg';
import event2 from '../../images/convene-jpeg2.jpg';
import event3 from '../../images/convene-jpeg3.jpg';

const Post = () => {
    return <div className={styles.post}>
        <h1> Communities are made in Convene </h1>
        <div className={styles.flex}>
            <div className={styles.card}>
                <img src={event1} alt="event one" />
                <h3>I Used Convene To Startup My Tech Firm</h3>
                <p>Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et toi
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                </p>
            </div>
            <div className={styles.card}>
                <img src={event2} alt="event two" />
                <h3>Convene Helped Me Gain A Deeper Understanding Of Networking</h3>
                <p>Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et toi
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                </p>
            </div>
            <div className={styles.card}>
                <img src={event3} alt="event three" />
                <h3>Will AI Replace Developers On A Worldwide Scale?</h3>
                <p>Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et toi
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                    Lorem Ipsum dolor sit amet conseciteur scimitar manta dolor sit amet et tou
                </p>
            </div>
        </div>
    </div>
}
export default Post;