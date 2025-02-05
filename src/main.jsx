import "./style.css";
import { initPWA } from "./pwa.js";
import { App } from "./app.jsx";
import { createRoot } from "react-dom/client";

const app = document.querySelector("#root");

initPWA(app);

const root = createRoot(document.querySelector("#app"));
root.render(<App></App>);
