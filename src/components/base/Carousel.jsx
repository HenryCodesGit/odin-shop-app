import styles from './Carousel.module.css'
import temp from '/src/assets/temp.jpg'


const Carousel = () => {
 
    return (
        <ul className={styles.productCarousel}>
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
        </ul>
    );
}

export default Carousel;