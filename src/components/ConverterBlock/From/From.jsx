import React from "react";
import styles from "./From.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeValues, changeVisibleFrom, setCurrentFromRate } from "../../../redux/ConverterSlice";


const From = () => {
   const fromValue = useSelector((state) => state.Converter.fromValue);
   const currentFromRate = useSelector((state) => state.Converter.currentFromRate);
   const ConverterSlice = useSelector(state => state.Converter)
   const fromVisible = useSelector(state => state.Converter.fromVisible)
   const dispatch = useDispatch();

   return (
      <div className={styles.fromBlock}>
         <div onClick={() => {dispatch(changeVisibleFrom(!fromVisible))}} className={styles.buttonSetRate}>
            <p className={styles.fromTitle}>{currentFromRate}</p>
            <div className={fromVisible ? styles.popUp + ' ' + styles.active : styles.popUp}>
               {ConverterSlice.allRatesNames.map((item, i) => {
                  return (
                     <button
                        onClick={() => {
                           dispatch(changeVisibleFrom(false));

                           dispatch(setCurrentFromRate(item));
                        }}
                        className={ConverterSlice.currentToRate === item ? `${styles.active} ${styles.buttonFrom}` : styles.buttonFrom}
                        key={i}
                     >
                        {item}
                     </button>
                  );
               })}
            </div>
         </div>
         <input
            onChange={(e) => {
               dispatch(changeValues(e.target.value));
            }}
            value={fromValue}
            type="number"
            className={styles.input}
         />
      </div>
   );
};

export default From;
