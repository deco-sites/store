import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 451,
  site: "store",
  domains: ["deco-sites-store.deno.dev"],
});