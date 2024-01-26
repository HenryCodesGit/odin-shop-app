
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from  '../../styles/store-splash.module.css'
const Splash = ({linkTo, backgroundURL, width, height}) =>{

  return(
    <>
    <div className={styles.splashContainer} style={{width, height}}>
      <div className={styles.splashImage} style={{backgroundImage: `url('${backgroundURL}')`}}></div>
      <div className={styles.splashButton}>
        <h1 className={styles.title}>DefinitelyNotFake</h1>
        <p className={styles.slogan}>Motivational quote to get consumers to buy more things</p>
        <Link className={styles.entry} to={linkTo}>Enter</Link>
      </div>
    </div>
    </>
  );
}

Splash.propTypes = {
  linkTo: PropTypes.string.isRequired,
  backgroundURL: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Splash.defaultProps = {
  width: '100svw',
  height: '100svh',
}



export default Splash