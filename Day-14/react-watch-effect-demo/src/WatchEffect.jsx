import React, { useEffect, useState } from "react";

const WatchEffect = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type something..."
      />
      <p className="mt-2">Current value: {inputValue}</p>
    </div>
  );
};

export default WatchEffect;
