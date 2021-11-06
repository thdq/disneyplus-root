// @ts-nocheck
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@disneyplus/disneyplus-layout",
  app: async () => await System.import('@disneyplus/disneyplus-layout'),
  activeWhen: ["/"],
});

registerApplication({
  name: "@disneyplus/disneyplus-home",
  app: () => import(/* webpackIgnore: true */ 'http://localhost:9002/src/main.ts'),
  activeWhen: ["/home"],
});

start({
  urlRerouteOnly: true,
});