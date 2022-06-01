import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext";
import * as Sentry from "@sentry/react";
import { BrowserTracing, Integrations } from "@sentry/tracing";
import App from "./App";
//Sentry error Tracing
Sentry.init({
  dsn: "https://99f8fdc4ec7a48459390dd36ab46168d@o1170633.ingest.sentry.io/6461466",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
