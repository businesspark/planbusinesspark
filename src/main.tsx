import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🚀 Plan Business Parks - Starting application...");

// Add error boundary for any uncaught errors
window.addEventListener('error', (e) => {
  console.error('❌ Global error caught:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('❌ Unhandled promise rejection:', e.reason);
});

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("❌ Root element not found!");
    // Create fallback UI instead of throwing
    document.body.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #1a472a; margin-bottom: 20px;">Plan Business Parks</h1>
        <p style="color: #666; margin-bottom: 20px;">Loading Error - Root element not found</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">Reload Page</button>
      </div>
    `;
    throw new Error("Root element not found");
  }

  console.log("✅ Root element found, creating React root...");

  const root = createRoot(rootElement);
  console.log("⚛️ React root created, rendering App...");

  root.render(<App />);
  console.log("🎉 App rendered!");
  
} catch (error) {
  console.error("💥 Fatal error during app initialization:", error);
  document.body.innerHTML = `
    <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="color: #1a472a; margin-bottom: 20px;">Plan Business Parks</h1>
      <p style="color: #666; margin-bottom: 20px;">Application Error</p>
      <p style="font-size: 14px; color: #999; margin-bottom: 20px;">${error?.message || 'Unknown error occurred'}</p>
      <button onclick="window.location.reload()" style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">Reload Page</button>
    </div>
  `;
}
