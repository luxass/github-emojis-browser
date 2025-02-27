import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ locals }) => {
  const emojiUrlsRaw = await fetch("https://api.github.com/emojis", {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Authorization": `Bearer ${locals.runtime.env.GITHUB_TOKEN}`,
      "User-Agent": "github-emojis (https://github.com/luxass/github-emojis)",
    },
  }).then((res) => res.json());

  return new Response(JSON.stringify(emojiUrlsRaw), {
    headers: {
      "Content-Type": "application/json",
      // cache for 4 hours in browser, 24 hours in Cloudflare
      "Cache-Control": "public, max-age=14400, s-maxage=86400",
    },
  });
}
