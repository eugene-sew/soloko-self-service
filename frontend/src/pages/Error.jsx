import { useRouteError } from "react-router-dom";
import error_img from "../assets/error.gif";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full h-screen grid place-items-center">
      <img src={error_img} alt="error gif" className="h-44 w-44 " />

      <div className="grid text-center ">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-400">
          <i>{error.statusText || error.message || error.data}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
