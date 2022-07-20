import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Data from "./data";

function App() {
  const content = Data.map((d) => {
    return <Content key={d.startDate} {...d} />;
  });
  return (
    <>
      <Navbar />
      {content}
    </>
  );
}

export default App;
