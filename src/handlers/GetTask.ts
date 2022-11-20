import { Request } from 'itty-router';

const GetTask = async (request: Request) => {
  const { id } = <any>request.params;
  return new Response(JSON.stringify({ msg: `Task ${id} received ` }));
};

export default GetTask;
