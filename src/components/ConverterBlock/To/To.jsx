import React from "react";
import styles from "./To.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";

const To = () => {
   const toValue = useSelector((state) => state.Converter.toValue);
   const currentToRate = useSelector(state => state.Converter.currentToRate)

   return (
      <div className={styles.toBlock}>
         <p className={styles.fromTitle}>{currentToRate}</p>
         <div className={styles.to}>
            <p className={styles.text}>{toValue ? toValue : "none"}</p>
         </div>
      </div>
   );
};

export default To;
