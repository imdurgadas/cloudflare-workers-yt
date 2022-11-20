import { Request } from 'itty-router';

const Hello = async (request: Request) => {
  const res = { msg: 'Hello World form Cloudflare Workers' };
  return new Response(JSON.stringify(res));
};

export default Hello;
