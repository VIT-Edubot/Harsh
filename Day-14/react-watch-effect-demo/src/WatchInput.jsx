import React, { useState } from "react";
import useWatch from "./useWatch";

const WatchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const watchedValue = useWatch(inputValue);

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded"
        placeholder="Watch this input"
      />
      <p className="mt-2">Watched Value: {watchedValue}</p>
    </div>
  );
};

export default WatchInput;
