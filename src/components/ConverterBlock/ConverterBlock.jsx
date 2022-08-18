import React from "react";
import styles from "./ConverterBlock.module.scss";
import From from "./From/From";
import To from "./To/To";
import * as axios from "axios";
import { setCurrentRate,  setRatesNames, switchRates } from "../../redux/ConverterSlice";
import switchImg from '../../assets/imgs/switch.png'
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
         <div className={styles.mainContent}>
            <From />
            <button className={styles.switch} onClick={() => {dispatch(switchRates())}}>
               <img src={switchImg} alt="" />
            </button>
            <To />
         </div>
      </div>
   );
};

export default ConverterBlock;
