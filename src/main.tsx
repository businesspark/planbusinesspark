import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TestApp from "./TestApp.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

// Try to render the main app, fallback to test app if there's an error
try {
  root.render(<App />);
} catch (error) {
  console.error("Error rendering main app:", error);
  try {
    root.render(<TestApp />);
  } catch (fallbackError) {
    console.error("Error rendering test app:", fallbackError);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">Critical error: Unable to render React app</div>`;
  }
}
