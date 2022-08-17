import React from "react";
import styles from "./ConverterBlock.module.scss";
import From from "./From/From";
import To from "./To/To";
import * as axios from "axios";
import { setCurrentRate, setCurrentToRate, setRatesNames, setCurrentFromRate, switchRates } from "../../redux/ConverterSlice";
import { useDispatch, useSelector } from "react-redux";

const ConverterBlock = () => {
   const ConverterSlice = useSelector((state) => state.Converter);
   const dispatch = useDispatch();
   const currentToRate = ConverterSlice.currentToRate;
   const currentFromRate = ConverterSlice.currentFromRate;

   React.useEffect(() => {
      axios.get(`https://api.exchangerate.host/latest?base=${currentFromRate}`, {}).then((response) => {
         if (ConverterSlice.currentRate === 0) {
            const arr = Object.entries(response.data.rates).map((item) => {
               return item[0];
            });
            dispatch(setRatesNames(arr));
         }
         Object.entries(response.data.rates).map((item) => {
            if (item[0] === ConverterSlice.currentToRate) {
               dispatch(setCurrentRate(item[1]));
            }
            return item;
         });
      });
   }, [dispatch, ConverterSlice, currentToRate, currentFromRate]);

   return (
      <div className={styles.mainBlock}>
         <h1 className={styles.currentRate}>
            1 {ConverterSlice.currentFromRate} = {ConverterSlice.currentRate} {ConverterSlice.currentToRate}
         </h1>
         <div className={styles.buttons}>
            <div className={styles.fromButtons}>
               {ConverterSlice.allRatesNames.map((item, i) => {
                  return (
                     <button
                        onClick={() => {
                           dispatch(setCurrentFromRate(item));
                        }}
                        className={ConverterSlice.currentFromRate === item ? `${styles.active} ${styles.buttonFrom}` : styles.buttonFrom}
                        key={i}
                     >
                        {item}
                     </button>
                  );
               })}
            </div>
            <div className={styles.toButtons}>
               {ConverterSlice.allRatesNames.map((item, i) => {
                  return (
                     <button
                        onClick={() => {
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
         <div className={styles.mainContent}>
            <From />
            <To />
         </div>
      </div>
   );
};

export default ConverterBlock;
