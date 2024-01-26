
import styles from  './SearchBar.module.css'

import PropTypes from 'prop-types';

const SearchBar = ({imageURL}) => {

    return (
        <form className={styles.searchForm} id="search">
            <input className = {styles.searchText} type="text" id="search-text" name="search-text" aria-label="search text"/>
            <button type="submit" aria-label="Go" style={{backgroundImage: `url(${imageURL})`}} />
        </form>
    );
};

SearchBar.propTypes = {
    imageURL: PropTypes.string.isRequired
}
export default SearchBar;