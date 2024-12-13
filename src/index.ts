import figlet from "figlet";
import { renderRoute } from "./pages";

const server = Bun.serve({
  port: 1337,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      const stream = await renderRoute('/', { message: 'Hello, homepage!' });
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (path === '/auth') {
      const stream = await renderRoute('/auth', { message: 'Hello, auth page!' });
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (path === "/api") return Response.json({ some: "buns", for: "you" });

    const body = figlet.textSync("Test");
    return new Response(body);
  },
});

console.log(figlet.textSync('FICKLEFATES'));
console.log(`‧₊☽◯☾₊‧⁺⋆˖ Fates be spun ☽✡︎☾ http://localhost:${server.port} ⋆˖⁺‧₊☽◯☾₊‧`);
console.log(``);
console.log(`
    /)/)       
    (•༝•)   < I'm running Bun ${Bun.version} today!
   c/ づづ
`);