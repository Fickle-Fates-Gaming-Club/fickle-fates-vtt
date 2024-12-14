import { renderToReadableStream } from "react-dom/server";
import HomePage from "./home";
import AuthPage from "./auth";
import FourOhFourPage from "./404";

const getProps = (testMsg:string) => ({
  message: testMsg
});

const pageRoutes = async (req:Request) => {
  const route = new URL(req.url).pathname;
  if (route === '/') {
    const props = getProps('Home Page Message');
    return new Response(
      await renderToReadableStream(<HomePage {...props} />), 
      { headers: { "Content-Type": "text/html" },
    });
  } else if (route === '/auth') {
    const props = getProps('Auth Page Message');
    return new Response(
      await renderToReadableStream(<AuthPage {...props} />), 
      { headers: { "Content-Type": "text/html" },
    });
  } else {
    return new Response(
      await renderToReadableStream(<FourOhFourPage />), 
      { headers: { "Content-Type": "text/html" },
    });
  }
};

export default pageRoutes;