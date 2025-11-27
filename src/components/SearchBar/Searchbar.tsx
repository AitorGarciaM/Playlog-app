import styles from './Searchbar.module.scss';

export default function Searchbar() {
    return (
         <input type="text" className={styles["search-bar"]} placeholder="Search games..." />
    )
}