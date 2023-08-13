import logo from './assets/images/yinwoods_logo.jpeg';
import styles from './Header.module.css';

export const Header = () => {
    
    return (
        <div className={styles.header}>
            <img src={logo} alt="Yin Woods"></img>
        </div>
    )
}