import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const setToLocalStorage = (data) => {
    window.localStorage.setItem(
      "user",

      JSON.stringify(data)
    );
  };

  const setTokenStorage = (data) => {
    window.localStorage.setItem("token", JSON.stringify(data));
  };

  const getFromLocalStorage = () => {
    return localStorage.getItem("user");
  };

  useEffect(() => {
    let mounted = true;
    let localUser = JSON.parse(getFromLocalStorage());
    let localToken = JSON.parse(localStorage.getItem("token"));
    if (mounted && localUser && localToken) {
      setUser(localUser);
      setToken(localToken);
    }
    return () => (mounted = false);
  }, []);

  const login = async (staffID, password) => {
    const url = import.meta.env.VITE_APP_LOGIN;
    await axios
      .post(url, {
        identifier: staffID,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setTokenStorage(res.data.jwt);
        setToken(res.data?.jwt);
        setToLocalStorage(res.data.user);
        setUser(res.data?.user);
      })
      .catch((err) => toast.error(err.response.data.error.message));
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
    window.location.replace("/console");
  };
  const vals = { login, user, logout, token };
  return <AuthContext.Provider value={vals}>{children}</AuthContext.Provider>;
}
