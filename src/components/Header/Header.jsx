import React from 'react';
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/imgs/logo.png'
import githubLogo from '../../assets/imgs/github.svg';
// import * as axios from 'axios'

const Header = () => {

    React.useEffect(() => {

    }, [])

    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="" />
                <p>Converter</p>
            </Link>
            <a rel="noreferrer"  target='_blank' href="https://github.com/xr1s0nx" className={styles.github}>
                <img src={githubLogo} alt="" />
            </a>
        </header>
    );
}

export default Header;
