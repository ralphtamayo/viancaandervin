import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </ReduxProvider>
);
