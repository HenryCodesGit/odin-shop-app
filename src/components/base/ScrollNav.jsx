import styles from  './ScrollNav.module.css'

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';


const ScrollNav = () => {

    return (
        <nav className={styles.scrollNav}><ul className={styles.list}>
        <li className={styles.item}><a>**ALL**</a></li>
        <li className={styles.item}><a>ItemA</a></li>
        <li className={styles.item}><a>ItemB</a></li>
        <li className={styles.item}><a>ItemC</a></li>
        <li className={styles.item}><a>ItemD</a></li>
        <li className={styles.item}><a>ItemE</a></li>
        <li className={styles.item}><a>ItemF</a></li>
        <li className={styles.item}><a>ItemG</a></li>
        <li className={styles.item}><a>ItemH</a></li>
        <li className={styles.item}><a>ItemI</a></li>
        <li className={styles.item}><a>ItemJ</a></li>
        <li className={styles.item}><a>ItemK</a></li>
        <li className={styles.item}><a>ItemL</a></li>
        <li className={styles.item}><a>ItemM</a></li>
        <li className={styles.item}><a>ItemN</a></li>
        <li className={styles.item}><a>ItemO</a></li>
        <li className={styles.item}><a>ItemP</a></li>
        <li className={styles.item}><a>ItemQ</a></li>
        <li className={styles.item}><a>ItemR</a></li>
        <li className={styles.item}><a>ItemS</a></li>
        <li className={styles.item}><a>ItemT</a></li>
      </ul></nav>
    );

}

ScrollNav.propTypes = {

}


export default ScrollNav;