import { Link } from "react-router";
import Button from "./Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-8xl font-bold text-indigo-600">404</h1>
      <p className="text-2xl font-semibold mt-4 text-slate-800">
        Oops! Page not found.
      </p>
      <p className="text-slate-500 mt-2 mb-8 max-w-md">
        The link you followed might be broken or the page has been removed.
      </p>
      <Link to="/">
        <Button>Take Me Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
