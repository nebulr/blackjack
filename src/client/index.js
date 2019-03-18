import m from "mithril";
import Main from "./containers/main";

console.log(Main);

//m.mount(document.body, Main);

m.route(document.body, "/", {
  "/": Main
});
