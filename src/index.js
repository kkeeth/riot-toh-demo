import "ress";
import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components.js";

// register
registerGlobalComponents();

// mount all the global components found in this page
mount("[data-riot-component]");
