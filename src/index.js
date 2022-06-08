import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext";
import * as Sentry from "@sentry/react";
import { BrowserTracing, Integrations } from "@sentry/tracing";
import './styles.scss';
import App from "./App";
import "mapbox-gl/dist/mapbox-gl.css";
import './styles.scss';
//Sentry error Tracing
Sentry.init({
  dsn: "https://0a8f65281c584a7496ec0bc45ad63a3e@o1170625.ingest.sentry.io/6463151",
  release: "%REACT_APP_RELEASE_VERSION%",
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
