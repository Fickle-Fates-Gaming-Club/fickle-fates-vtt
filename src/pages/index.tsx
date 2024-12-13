import { renderToReadableStream } from "react-dom/server";
import HomePage from "./home";
import AuthPage from "./auth";
import FourOhFourPage from "./404";

const routes = (route:string, props:any) => {
  if (route === '/') {
    return <HomePage {...props} />;
  } else if (route === '/auth') {
    return <AuthPage {...props} />;
  } else {
    return <FourOhFourPage {...props} />;
  }
};

export const renderRoute = async (route:any, props:any) => await renderToReadableStream(
  routes(route, props)
);

