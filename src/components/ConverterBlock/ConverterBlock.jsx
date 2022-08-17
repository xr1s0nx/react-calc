import React from 'react';
import styles from './ConverterBlock.module.scss'
import From from './From/From';
import To from './To/To';

const ConverterBlock = () => {
    return (
        <div className={styles.mainBlock}>
            <From/>
            <To/>
        </div>  
    );
}

export default ConverterBlock;
