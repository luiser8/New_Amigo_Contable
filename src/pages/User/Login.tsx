import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IUserLogin } from "../../interfaces/IUserAuth";
import { TypesContext } from "../../types/Types.context";
import { authContext } from "../../auth/useContext";
import "../../../public/css/form.css";
import Alert from "../../components/Alert";
import { postAuthLoginService } from "../../http/service/authService";

const Login = () => {
  const { login } = useContext(authContext) as TypesContext;
  const [errorRegister, setErrorRegister] = useState({
    isError: false,
    msj: "",
  });
  const [user, setUser] = useState<IUserLogin>({
    userName: "",
    password: "",
  });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorRegister({ ...errorRegister, isError: false, msj: "" });
    const { data, error } = await postAuthLoginService(user);
    if (data?.error === "" && error === "") {
      login({
        userId: data.userId,
        email: data.email,
        userName: data.userName,
        password: data.password,
        token: data.token,
        role: data.role,
      });
    } else {
      setErrorRegister({
        ...errorRegister,
        isError: true,
        msj: data.error || error,
      });
    }
  };

  return (
    <div className="login-page">
      {errorRegister.isError ? <Alert isError={errorRegister} /> : <></>}
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            required
            type="text"
            placeholder="UserName"
            value={user.userName}
            onChange={(ev) => setUser({ ...user, userName: ev.target.value })}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(ev) => setUser({ ...user, password: ev.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        <Link to={"/register"}>Create account</Link>
        <br />
        <Link to={"/forgot"}>Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;
