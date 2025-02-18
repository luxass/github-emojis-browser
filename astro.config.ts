import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { astroHTMX } from "./astro-htmx";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    icon(),
    astroHTMX,
  ],
  adapter: cloudflare(),
  output: "server",
});
