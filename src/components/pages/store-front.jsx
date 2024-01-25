//TODO: make the page, split into components, and use the following html

import temp from '../../assets/temp.jpg'

import styles from  '../../styles/store-front.module.css'

const Store = () => {

  return(
  <>
    <header>
      <div className={styles.navLogo}>
        <a href="/" className={styles.navLogoLinks} aria-label="DefinitelyNotFake.com">
          <div className={styles.navLogoIcon}></div>
          <span className={styles.navLogoText}>DefinitelyNotFake</span>
        </a>
      </div>
      <div className={styles.navRight}>
        <button type="button" className={styles.userAccount} aria-label="user account">
          <div className={styles.icon}></div>
          <div className={styles.text}>UserName</div>
        </button>
        <button type="button" className={styles.cart} aria-label="cart">
          <div className={styles.icon}></div>
          <div className={styles.text}>Cart</div>
        </button>
      </div>
      <form className={styles.searchForm} id="search">
          <input className = {styles.searchText} type="text" id="search-text" name="search-text" aria-label="search text"/>
          <button type="submit" aria-label="Go"></button>
      </form>
    </header>
    <nav><ul>
      <li><a>**ALL**</a></li>
      <li><a>ItemA</a></li>
      <li><a>ItemB</a></li>
      <li><a>ItemC</a></li>
      <li><a>ItemD</a></li>
      <li><a>ItemE</a></li>
      <li><a>ItemF</a></li>
      <li><a>ItemG</a></li>
      <li><a>ItemH</a></li>
      <li><a>ItemI</a></li>
      <li><a>ItemJ</a></li>
      <li><a>ItemK</a></li>
      <li><a>ItemL</a></li>
      <li><a>ItemM</a></li>
      <li><a>ItemN</a></li>
      <li><a>ItemO</a></li>
      <li><a>ItemP</a></li>
      <li><a>ItemQ</a></li>
      <li><a>ItemR</a></li>
      <li><a>ItemS</a></li>
      <li><a>ItemT</a></li>
    </ul></nav>
    <main><ul className={styles.productCarousel}>
      <li className={styles.productContainer}>
        <a href="/" className={styles.productCard}>
          <img className={styles.productImage} src={temp} />
          <div className={styles.productPrice}>$58.95</div>
          <div className={styles.productName}>Noma Caddy Reel with 25ft Cord and Power Bar</div>
          <div className={styles.productRating}>★★★★☆ <span>(103 Ratings)</span></div>
        </a>
      </li>
      <li className={styles.productContainer}>
        <a href="/" className={styles.productCard}>
          <img className={styles.productImage} src={temp} />
          <div className={styles.productPrice}>$58.95</div>
          <div className={styles.productName}>Noma Caddy Reel with 25ft Cord and Power Bar</div>
          <div className={styles.productRating}>★★★★☆ <span>(103 Ratings)</span></div>
        </a>
      </li>
      <li className={styles.productContainer}>
        <a href="/" className={styles.productCard}>
          <img className={styles.productImage} src={temp} />
          <div className={styles.productPrice}>$58.95</div>
          <div className={styles.productName}>Noma Caddy Reel with 25ft Cord and Power Bar</div>
          <div className={styles.productRating}>★★★★☆ <span>(103 Ratings)</span></div>
        </a>
      </li>
      <li className={styles.productContainer}>
        <a href="/" className={styles.productCard}>
          <img className={styles.productImage} src={temp} />
          <div className={styles.productPrice}>$58.95</div>
          <div className={styles.productName}>Noma Caddy Reel with 25ft Cord and Power Bar</div>
          <div className={styles.productRating}>★★★★☆ <span>(103 Ratings)</span></div>
        </a>
      </li>
    </ul></main>
    <footer>© 2024 The Odin Project. All rights reserved.</footer>
  </>
  )
}

export default Store;