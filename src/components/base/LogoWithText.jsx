import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from  './LogoWithText.module.css'

const LogoWithText = ({
    linkTo = '/',
    imageURL = '../assets/icons/vegetables.png',
    logoText = 'DefinitelyNotFake',
    ariaLabel = 'DefinitelyNotFake',
}) => {
    return (<div className={styles.navLogo}>
        <Link to={linkTo} className={styles.navLogoLinks} aria-label={ariaLabel}>
            <div className={styles.navLogoIcon} style={{backgroundImage: `url('${imageURL}')`}}></div>
            <span className={styles.navLogoText}>{logoText}</span>
        </Link>
    </div>);
};

LogoWithText.propTypes = {
    linkTo: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
};

export default LogoWithText;