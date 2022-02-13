import React from "react";
import styles from "./styles.module.css";

function A() {
  console.log("A: ", styles);
  return <div className={styles.title}>A</div>;
}

export default A;
