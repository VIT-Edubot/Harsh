import React from "react";
import NameForm from "./NameForm";
import WatchEffect from "./WatchEffect";
import WatchInput from "./WatchInput";
import FocusInput from "./FocusInput";

const App = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">React Watch Effect Demo</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. NameForm (useRef for persistence)</h2>
        <NameForm />
      </section>

      <hr className="my-4" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. WatchEffect (useEffect monitoring)</h2>
        <WatchEffect />
      </section>

      <hr className="my-4" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. WatchInput (Custom useWatch Hook)</h2>
        <WatchInput />
      </section>

      <hr className="my-4" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. FocusInput (useRef for DOM manipulation)</h2>
        <FocusInput />
      </section>
    </div>
  );
};

export default App;
