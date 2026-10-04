// functions/api/index.js (your Worker entry point)
import { onRequestPost } from "../functions/api/submit.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/submit" && request.method === "POST") {
      return onRequestPost({ request, env });
    }

    // Fall through to static assets for everything else
    return env.ASSETS.fetch(request);
  },
};
