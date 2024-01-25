import { Link } from 'react-router-dom';

import styles from  '../../styles/store-splash.module.css'
const Splash = () =>{

  return(
    <>
    <div className={styles.splashContainer}>
      <div className={styles.splashImage}></div>
      <div className={styles.splashSubmit}>
        <h1 className={styles.title}>DefinitelyNotFake</h1>
        <p className={styles.slogan}>Motivational quote to get consumers to buy more things</p>
        <Link className={styles.entry} to="store-front">Enter</Link>
      </div>
    </div>
    </>
  );
}



export default Splash