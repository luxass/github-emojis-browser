import type { AstroIntegration } from "astro";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

const astroHTMX: AstroIntegration = {
  name: "astro-htmx",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      injectScript(
        "page",
        `import * as htmx from "htmx.org";
        document.addEventListener('astro:after-swap', () => {
          htmx.process(document.body)
        })`,
      );
    },
  },
};

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    icon(),
    astroHTMX,
  ],
  compressHTML: false,
  adapter: cloudflare(),
  output: "hybrid",
});
