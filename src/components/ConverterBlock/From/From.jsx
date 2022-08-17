import React from "react";
import styles from "./From.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeToValue, changeFromValue } from "../../../redux/ConverterSlice";
import axios from "axios";

const From = () => {
   const fromValue = useSelector((state) => state.Converter.fromValue);
   const dispatch = useDispatch();

   React.useEffect(() => {
      axios
         .get(`https://api.apilayer.com/currency_data/convert?to=RUB&from=USD&amount=${fromValue}`, {
            headers: {
               apikey: "qleByQI3GdXUVRJFG7EPlVkudvZu0kcU",
            },
         })
         .then((response) => {
            dispatch(changeToValue(response.data.result))
         });
   }, [fromValue, dispatch]);

   return (
      <>
         <input
            onChange={(e) => {
               dispatch(changeFromValue(e.target.value));
            }}
            value={fromValue}
            type="number"
            className={styles.input}
         />
      </>
   );
};

export default From;
