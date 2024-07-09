import "@riotjs/hot-reload";
import { component } from "riot";
import App from "./app.riot";
import registerGlobalComponents from "./register-global-components.js";
import "ress";
import "./style.css";

// register
registerGlobalComponents();

// mount the root tag
component(App)(document.getElementById("root"));
