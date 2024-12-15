import fourOhFourRoutes from './404';
import { AuthRoutes } from './auth';

const apiRoutes = async (req:Request) => {
  const route = new URL(req.url).pathname;

  if (route === '/api/auth') {
    return AuthRoutes(req);
  } else {
    return fourOhFourRoutes();
  }
};

export default apiRoutes;