import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@disneyplus/disneyplus-layout",
  app: () =>
    System.import("@disneyplus/disneyplus-layout"),
  activeWhen: () => true,
});

registerApplication({
  name: "@disneyplus/disneyplus-home",
  app: () =>
    System.import("@disneyplus/disneyplus-home"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
