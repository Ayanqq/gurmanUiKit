import React, { useState, useRef, useEffect, FC } from "react";
import styles from "./OTPInput.module.scss";

export type OTPInputProps = {
  help?: string | null;
  handleOnDone?: (value: string) => void;
};

export const OTPInput: FC<OTPInputProps> = ({
  help = "",
  handleOnDone = () => {},
}) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const otpString = otp.join("");
    if (otpString.length === 6) handleOnDone(otpString);
  }, [otp, handleOnDone]);

  // Обработчик изменения инпута
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Только цифры

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Переключаем фокус на следующий инпут
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Обработчик нажатий клавиш
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Label Text</label>
      <div className={styles.otpWrapper}>
        {/* Левая группа (3 инпута) */}
        <div className={styles.otpGroup}>
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
                return;
              }}
              value={otp[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={styles.otpInput}
              maxLength={1}
            />
          ))}
        </div>

        {/* Разделитель */}
        <span className={styles.separator}>•</span>

        {/* Правая группа (3 инпута) */}
        <div className={styles.otpGroup}>
          {[3, 4, 5].map((i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
                return;
              }}
              value={otp[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={styles.otpInput}
              maxLength={1}
            />
          ))}
        </div>
      </div>
      {help && <span className={styles.helpText}>{help}</span>}
    </div>
  );
};

export default OTPInput;
