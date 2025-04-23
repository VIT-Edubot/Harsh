import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" className="border p-2 rounded" placeholder="Click the button to focus me" />
      <button onClick={handleFocus} className="ml-2 px-4 py-2 bg-green-500 text-white rounded">Focus Input</button>
    </div>
  );
};

export default FocusInput;
