import styles from  '/src/styles/store-header.module.css'

import LogoWithText from '/src/components/base/LogoWithText'
import logo from '/src/assets/icons/vegetables.png'

import SearchBar from '/src/components/base/SearchBar'
import searchIcon from '/src/assets/icons/magnifier.png'

import ExpandingButton from '../base/ExpandingButton'
import userIcon from '/src/assets/icons/profile-user.png'
import cartIcon from '/src/assets/icons/shopping-cart.png'
const StoreHeader = () => {

    return (
        <header className={styles.storeHeader}>
            <LogoWithText linkTo="/store/" imageURL={logo} logoText="DefinitelyNotFake" ariaLabel="Definitely Not Fake"></LogoWithText>
            <div className={styles.navRight}>
                <ExpandingButton text='UserName' imageURL = {userIcon} />
                <ExpandingButton text='Cart' imageURL = {cartIcon} linkTo="cart" />
            </div>
            <SearchBar imageURL={searchIcon}/>
        </header>
    );
}

export default StoreHeader