import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@disneyplus/disneyplus-layout",
  app: () =>
    System.import("@disneyplus/disneyplus-layout"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
