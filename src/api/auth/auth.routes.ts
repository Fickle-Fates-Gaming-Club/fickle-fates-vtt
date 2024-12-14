import figlet from 'figlet';
import { methodBools } from '../../utils';
import fourOhFourRoutes from '../404';

export async function AuthRoutes (req:Request) {
  const path = new URL(req.url).pathname;
  const { GET, POST } = methodBools(req);

  if (GET && path === '/api/auth') {
    return Response.json({
      path: '/api/auth',
      method: req.method,
      message: 'Get user auth status goes here!'
    });
  } else if (POST && path === '/api/auth') {
    return Response.json({
      path: '/api/auth',
      method: req.method,
      message: 'Login (update user auth status) goes here!'
    });
  } else if (POST && path === '/api/auth/register') {
    return Response.json({
      path: '/api/auth',
      method: req.method,
      message: 'Sign up new user goes here!'
    });
  } else if (POST && path === '/api/auth/reset') {
    return Response.json({
      path: '/api/auth',
      method: req.method,
      message: 'Reset user PW goes here!'
    });
  } else {
    return fourOhFourRoutes();
  }
}