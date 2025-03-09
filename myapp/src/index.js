import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h2>my app</h2>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
