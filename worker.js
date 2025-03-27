export default {
    async fetch(request) {
        const url = new URL(request.url);
        const fpath = url.pathname.slice(1);

        const routes = {
            "discord": "https://discord.gg/3Q8xkcBT3M",
            "git": `https://github.com/administer-org/${fpath.replace(/^git\//, '')}`,
            "discourse": "https://devforum.roblox.com/t/3179989",
            "roblox": "https://create.roblox.com/store/asset/127698208806211/Administer",
            "docs": "https://docs.administer.notpyx.me"
        };

        for (const [route, path] of Object.entries(routes)) {
            if (fpath.startsWith(route)) {
                return Response.redirect(path, 301);
            }
        }

        return new Response(JSON.stringify({ error: "That path isn't a valid shortlink." }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });
    }
};
