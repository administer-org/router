export default {
    async fetch(request) {
        const url = new URL(request.url);
        const fpath = url.pathname.slice(1);

        const routes = {
            "git":       `https://github.com/administer-org/${fpath.replace(/^git\//, '')}`,
            "docs":      "https://docs.admsoftware.org",
            "blog":      "https://blog.admsoftware.org",
            "roblox":    "https://create.roblox.com/store/asset/127698208806211/Administer",
            "discord":   "https://discord.gg/Ku6mgEqna2",
            "devforum":  "https://devforum.roblox.com/t/179989",
            "bluesky":   "https://bsky.app/profile/admsoftware.org",
            "translate": "https://translate.admsoftware.org"
        };

        for (const [route, path] of Object.entries(routes)) {
            if (fpath.startsWith(route)) {
                return Response.redirect(path, 301);
            }
        }

        return new Response(JSON.stringify({ error: "That isn't a valid shortlink. Currently valid shortlinks include /git/[REPO], /docs, /blog, /roblox, /discord, /devforum, /translate, or /bluesky." }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });
    }
};
