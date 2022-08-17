import React from "react";
import styles from "./From.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeValues } from "../../../redux/ConverterSlice";

const From = () => {
   const fromValue = useSelector((state) => state.Converter.fromValue);
   const currentFromRate = useSelector((state) => state.Converter.currentFromRate);
   const dispatch = useDispatch();

   return (
      <div className={styles.fromBlock}>
         <p className={styles.fromTitle}>{currentFromRate}</p>
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
