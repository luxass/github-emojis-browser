import presetWind4 from "@unocss/preset-wind4";
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
  ],
  theme: {
    colors: {
      "background": "var(--background)",
      "foreground": "var(--foreground)",
      "accent": "#4169E1",
      "card-bg": "var(--card-bg)",
      "card-border": "var(--card-border)",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
