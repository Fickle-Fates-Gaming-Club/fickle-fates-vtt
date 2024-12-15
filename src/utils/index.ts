export function methodBools (req:Request) {
  const GET = req?.method === 'GET';
  const POST = req?.method === 'POST';
  const PATCH = req?.method === 'PATCH';
  const PUT = req?.method === 'PUT';
  const DELETE = req?.method === 'DELETE';

  return { GET, POST, PUT, PATCH, DELETE };
}