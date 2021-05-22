import React from "react";
import { QUOTE_DATA } from "../../data/nav/quote-data";

import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quote}>
      <p className={styles.text}>{QUOTE_DATA.text}</p>
      <p className={styles.author}>{QUOTE_DATA.author}</p>
    </div>
  );
};

export default Quote;
