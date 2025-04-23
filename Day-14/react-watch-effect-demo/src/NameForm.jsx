import React, { useRef, useState } from "react";

const NameForm = () => {
  const nameInputRef = useRef(null);
  const initialNameRef = useRef("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    initialNameRef.current = nameInputRef.current.value;
    setName(initialNameRef.current);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input ref={nameInputRef} type="text" placeholder="Enter your name" className="border p-2 rounded" />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      {name && <p className="mt-2">Stored Name: {name}</p>}
    </form>
  );
};

export default NameForm;
