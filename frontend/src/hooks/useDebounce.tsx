import React, { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number = 300) => {
  const [delayedValue, setDelayedValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return delayedValue;
};

export default useDebounce;
