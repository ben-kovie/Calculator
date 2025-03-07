import { useState } from "react";
import styles from "../modules.css/calculator.module.css";
import CalculatorLogic from "./CalculatorLogic";

const Calculator = () => {
  const { input, setInput, handleClick } = CalculatorLogic();

  const buttons = ["AC", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <div className={styles.display}>{input}</div>
        <div className={styles.buttonGrid}>
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`${styles.calcButton} ${["÷", "×", "-", "+", "="].includes(btn) ? styles.operator : ""} ${btn === "AC" ? styles.clear : ""} ${btn === "0" ? styles.zero : ""}`}
              onClick={() => {
                if (btn === "±") {
                  setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
                } else {
                  handleClick(btn);
                }
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

