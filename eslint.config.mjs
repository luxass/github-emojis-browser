// @ts-check
import {
  luxass,
} from "@luxass/eslint-config";

export default luxass({
  astro: true,
  formatters: true,
  unocss: true,
}, {
  ignores: [
    "worker-configuration.d.ts",
    "src/env.d.ts",
  ],
});
