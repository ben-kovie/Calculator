import { useState } from "react";

const CalculatorLogic = () => {
  const [input, setInput] = useState("0");
  const [rawInput, setRawInput] = useState("0");

  const formatNumber = (num) => {
    return parseFloat(num).toLocaleString("en-US");
  };

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
      setRawInput("0");
    } else if (value === "=") {
      try {
        const result = eval(rawInput).toString();
        setInput(formatNumber(result));
        setRawInput(result);
      } catch {
        setInput("Error");
        setRawInput("0");
      }
    } else if (value === "%") {
      setRawInput((prev) => (parseFloat(prev) / 100).toString());
      setInput(formatNumber(parseFloat(rawInput) / 100));
    } else {
      const newRawInput = rawInput === "0" ? value : rawInput + value;
      setRawInput(newRawInput);
      setInput(formatNumber(newRawInput));
    }
  };

  return { input, setInput, handleClick };
};

export default CalculatorLogic;
