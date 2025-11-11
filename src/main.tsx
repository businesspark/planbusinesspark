import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Starting Plan Business Parks application...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found");
  document.body.innerHTML = `
    <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; min-height: 100vh;">
      <h1 style="color: #e74c3c;">Configuration Error</h1>
      <p>Root element not found. Please check the HTML structure.</p>
    </div>
  `;
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

console.log("Rendering React application...");
root.render(<App />);
