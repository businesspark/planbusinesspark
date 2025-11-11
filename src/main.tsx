import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle redirect from 404.html
(function() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect && redirect !== location.pathname + location.search + location.hash) {
    sessionStorage.removeItem('redirect');
    window.history.replaceState(null, null, redirect);
  }
})();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

// Render the app with error boundary
try {
  root.render(<App />);
} catch (error) {
  console.error("Error rendering app:", error);
  rootElement.innerHTML = `
    <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center;">
      <h1 style="color: #e74c3c;">Loading Error</h1>
      <p>There was an issue loading Plan Business Parks website.</p>
      <p style="color: #666;">Please refresh the page or try again later.</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}
