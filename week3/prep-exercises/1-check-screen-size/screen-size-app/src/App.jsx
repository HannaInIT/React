import React from "react";
import { useWindowSize } from "./hooks/useWindowSize.jsx";
import PersonByWindowSize from "./components/PersonByWindowSize.jsx";

function App() {
  const { width, height } = useWindowSize("Main screen");

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Responsive Avatar</h1>
      <p>
        Screen size: {width} x {height}
      </p>
      <PersonByWindowSize />
      <p>
        Resize your window to see different avatars for small, medium, or big
        screens. The color changes randomly on resize!
      </p>
    </div>
  );
}

export default App;
