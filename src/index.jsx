import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDom.createRoot(entryPoint).render(<App />);