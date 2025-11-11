import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🚀 Plan Business Parks - Starting application...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found!");
  throw new Error("Root element not found");
}

console.log("✅ Root element found, creating React root...");

const root = createRoot(rootElement);
console.log("⚛️ React root created, rendering App...");

root.render(<App />);
console.log("🎉 App rendered!");
