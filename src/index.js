import "./style.css";
import "@riotjs/hot-reload";
import { component } from "riot";
import App from "./app.riot";
import registerGlobalComponents from "./register-global-components.js";

// register
registerGlobalComponents();

// mount the root tag
component(App)(document.getElementById("root"), {
  title: "Tour of Heroes with Riot"
});