import styles from './ExpandingButton.module.css'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExpandingButton = ({
    text,
    imageURL,
    linkTo,
}) => {

    return(
        <Link to={linkTo} className={styles.expandingButton} aria-label="user account">
            <div className={styles.icon} style={{backgroundImage: `url('${imageURL}')`}}></div>
            <div className={styles.text}>{text}</div>
        </Link>
    )
}

ExpandingButton.propTypes = {
    text: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
}

export default ExpandingButton;