import React from 'react';
import styles from './To.module.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const To = () => {

    const toValue = useSelector(state => state.Converter.toValue);

    return (
        <>
            <div className={styles.to}>
                <p className={styles.text}>{toValue ? toValue : 'none'}</p>
            </div>
        </>
    );
}

export default To;
