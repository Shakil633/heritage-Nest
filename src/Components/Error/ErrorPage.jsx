import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center leading-10	">
        <h1 className=" text-[#FF9F0D] text-8xl font-bold">404</h1>
        <h1 className=" text-2xl font-semibold">
          Oops! Look likes something going wrong
        </h1>

        <p className="w-96 mx-auto">
          Page Cannot be found! we’ll have it figured out in no time. Menwhile,
          cheek out these fresh ideas:
        </p>
        <button className="bg-[#FF9F0D] text-white p-2 rounded-md">
          <Link to={"/"}>Go to home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
