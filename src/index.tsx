import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// Inicializa conexão da aplicação com o Firebase
import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
