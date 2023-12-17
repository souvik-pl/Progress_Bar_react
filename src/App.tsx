import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

function App() {
  const totalValue: number = 30;
  const intervalDelay: number = 200;
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      const newValue: number = currentValue + 1;
      if (newValue > totalValue) {
        clearInterval(intervalId);
      }
      else {
        setCurrentValue(newValue);
      }
    }, intervalDelay);

    return () => clearInterval(intervalId);
  }, [currentValue]);

  return (
    <div className={styles.container}>
      <ProgressBar completed={currentValue} total={totalValue} />
    </div>
  )
}

export default App;