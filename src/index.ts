import figlet from 'figlet';
import pageRoutes from './pages';
import apiRoutes from './api';

const server = Bun.serve({
  port: 1337,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === '/api/') {
      return apiRoutes(req)
    } else {
      return pageRoutes(req);
    }
  },
});

console.log(figlet.textSync('FICKLEFATES'));
console.log(`‧₊☽◯☾₊‧⁺⋆˖ Fates be spun upon http://localhost:${server.port} ⋆˖⁺‧₊☽◯☾₊‧`);
console.log(``);
console.log(`
    /)/)       
    (•༝•)   < I'm running Bun ${Bun.version} today!
   c/ づづ
`);