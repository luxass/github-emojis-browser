import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig, envField } from 'astro/config';
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
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  trailingSlash: "never",
  adapter: cloudflare({
    imageService: "cloudflare",
    sessionKVBindingName: undefined
  }),
  output: "server",
});
