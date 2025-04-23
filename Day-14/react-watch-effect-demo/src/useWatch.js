import { useEffect, useRef, useState } from "react";

const useWatch = (value) => {
  const [watchedValue, setWatchedValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      setWatchedValue(value);
    }
  }, [value]);

  return watchedValue;
};

export default useWatch;
