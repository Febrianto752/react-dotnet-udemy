import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./app/stores/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.Fragment>
);
