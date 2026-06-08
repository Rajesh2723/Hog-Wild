import { useState } from "react";
import initialHogs from "./porkers_data";

import Nav from "./components/Nav";
import Controls from "./components/Controls";
import HogList from "./components/HogList";
import HogForm from "./components/HogForm";

function App() {
  const [hogs, setHogs] = useState(initialHogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const handleHide = (hogName) => {
    setHiddenHogs((prev) => [...prev, hogName]);
  };

  const handleAddHog = (newHog) => {
    setHogs((prev) => [...prev, newHog]);
  };

  let visibleHogs = hogs.filter(
    (hog) => !hiddenHogs.includes(hog.name)
  );

  if (showGreasedOnly) {
    visibleHogs = visibleHogs.filter(
      (hog) => hog.greased
    );
  }

  if (sortBy === "name") {
    visibleHogs = [...visibleHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "weight") {
    visibleHogs = [...visibleHogs].sort(
      (a, b) => a.weight - b.weight
    );
  }

  return (
    <>
      <Nav />

      <Controls
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <HogList
        hogs={visibleHogs}
        onHide={handleHide}
      />
    </>
  );
}

export default App;