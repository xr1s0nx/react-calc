import React from "react";
import styles from "./To.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeVisibleTo, setCurrentToRate } from "../../../redux/ConverterSlice";

const To = () => {
   const toValue = useSelector((state) => state.Converter.toValue);
   const ConverterSlice = useSelector((state) => state.Converter);
   const toVisible = useSelector((state) => state.Converter.toVisible);
   const currentToRate = useSelector((state) => state.Converter.currentToRate);
   const dispatch = useDispatch();

   return (
      <div className={styles.toBlock}>
         <div
            onClick={() => {
               dispatch(changeVisibleTo(!toVisible));
            }}
            className={styles.buttonSetRate}
         >
            <p className={styles.fromTitle}>{currentToRate}</p>
            <div className={toVisible ? styles.popUp + " " + styles.active : styles.popUp}>
               {ConverterSlice.allRatesNames.map((item, i) => {
                  return (
                     <button
                        onClick={() => {
                           dispatch(changeVisibleTo(false));

                           dispatch(setCurrentToRate(item));
                        }}
                        className={ConverterSlice.currentToRate === item ? `${styles.active} ${styles.buttonTo}` : styles.buttonTo}
                        key={i}
                     >
                        {item}
                     </button>
                  );
               })}
            </div>
         </div>
         <div className={styles.to}>
            <p className={styles.text}>{toValue}</p>
         </div>
      </div>
   );
};

export default To;
