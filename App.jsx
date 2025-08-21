import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({ theme: {} });

const App = () => {
  return (
    <div
      className={tw`h-screen w-full [background-image:url('assets/bg.svg')] [background-size:125px] [background-position:top] overflow-hidden`}
    />
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
