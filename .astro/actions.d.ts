declare module "astro:actions" {
	type Actions = typeof import("/Users/luxass/dev/github-emojis-browser/src/actions")["server"];

	export const actions: Actions;
}