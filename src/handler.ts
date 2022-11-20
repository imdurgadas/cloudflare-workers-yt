import { Request, Router } from 'itty-router';
import CreateTask from './handlers/CreateTask';
import GetTask from './handlers/GetTask';
import Hello from './handlers/hello';

const router = Router({ base: '/api' });

const errorHandler = (error: { message: string; status: any }) => {
  const errMsg = JSON.stringify(error.message || 'Server Error');
  return new Response(errMsg, { status: error.status || 500 });
};

router
  .get('/hello', Hello)
  .get('/tasks/:id', GetTask)
  .post('/tasks', CreateTask)
  .get('*', (request: Request) => {
    return new Response(
      JSON.stringify({ error: 'Requested route does not exist' }),
      { status: 404 }
    );
  });

export const handleRequest = (request: Request) => {
  return router.handle(request).catch(errorHandler);
};
