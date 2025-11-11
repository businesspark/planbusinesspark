import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Debug logging
console.log("🚀 Plan Business Parks - Starting application...");
console.log("📍 Current URL:", window.location.href);
console.log("🌐 User Agent:", navigator.userAgent);

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  console.log("📄 DOM ready, initializing React...");
  
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("❌ Root element not found!");
    document.body.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #e74c3c; margin-bottom: 20px;">Plan Business Parks</h1>
        <p style="color: #666; margin-bottom: 20px;">Unable to initialize the application</p>
        <p style="font-size: 14px; color: #999; margin-bottom: 30px;">Root element (#root) not found in HTML</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Reload Page
        </button>
        <div style="margin-top: 30px; color: #999; font-size: 14px;">
          <p>Contact: +91 81041 24183</p>
        </div>
      </div>
    `;
    return;
  }

  console.log("✅ Root element found, creating React root...");
  
  try {
    const root = createRoot(rootElement);
    console.log("⚛️ React root created, rendering App...");
    root.render(<App />);
    console.log("🎉 App rendered successfully!");
  } catch (error) {
    console.error("💥 Error rendering React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; text-align: center; background: #f8f9fa; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #e74c3c; margin-bottom: 20px;">Plan Business Parks</h1>
        <p style="color: #666; margin-bottom: 20px;">React Application Error</p>
        <p style="font-size: 14px; color: #999; margin-bottom: 30px;">
          ${error instanceof Error ? error.message : String(error)}
        </p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Reload Page
        </button>
        <div style="margin-top: 30px; color: #999; font-size: 14px;">
          <p>Contact: +91 81041 24183</p>
        </div>
      </div>
    `;
  }
}
