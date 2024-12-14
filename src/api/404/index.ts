const fourOhFourRoutes = () => new Response(
  '404 Route not found', 
  { status: 404 }
);

export default fourOhFourRoutes;