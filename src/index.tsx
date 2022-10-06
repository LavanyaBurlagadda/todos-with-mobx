import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import * as stores from "./stores";
import { I18nextProvider } from "react-i18next";
import i18n from "./common/i18n";

export const Main = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Provider {...stores}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
