import figlet from "figlet";

const server = Bun.serve({
  port: 1337,
  fetch(req) {
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