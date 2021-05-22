import React from "react";
import styles from "./Infor.module.css";

const Infor = (props) => {
  return (
    <div className={styles.info}>
      {props.data.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <p>
              {`${item.title} : `}
              <span>{item.value}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Infor;
