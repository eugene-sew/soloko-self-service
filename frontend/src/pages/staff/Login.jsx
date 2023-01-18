import { useRef } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/auth";
const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const loginHandler = (e) => {
    e.preventDefault();
    login(usernameRef.current?.value, passwordRef.current?.value);
  };
  return (
    <div className="lgp w-screen h-screen grid place-content-center">
      <form
        className="h-fit bg-orange-200 rounded-lg w-[400px] shadow z-50 px-2 py-6 -mt-10"
        onSubmit={loginHandler}
      >
        <div className="grid place-items-center ">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12"
          />
          <h1 className="font-bold  text-2xl text-center tracking-widest">
            Soloko
            <br /> Cafe
          </h1>
          <small className="text-center uppercase text-xs mt-2 font-thin tracking-wider">
            locaclicious <br /> drinks and food
          </small>
        </div>
        <div className="grid gap-6 px-3  mt-5">
          <input
            type="text"
            ref={usernameRef}
            className="w-full h-10 px-3 py-2 rounded-lg shadow-lg placeholder:text-orange-300 outline-none text-orange-500"
            placeholder="staff ID"
            autoComplete="false"
            required
            name="username"
          />
          <input
            type="password"
            ref={passwordRef}
            className="w-full h-10 px-3 py-2 rounded-lg shadow-lg placeholder:text-orange-300 outline-none text-orange-500"
            placeholder="password"
            autoComplete="false"
            required
          />
          <button
            className="bg-orange-600 text-white font-semibold w-full px-2 py-2 rounded-lg shadow-lg "
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
