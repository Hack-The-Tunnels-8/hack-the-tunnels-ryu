import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("hello")
      const message = await login("admin@email.com", "password");
      setMessage(message)
    } catch (error) {
      setMessage(message)
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
<<<<<<< HEAD
        <h1><br /><br />Login</h1>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
=======
        <h1>Login</h1>
        <form action="" method="post">
        <p>ID: <input name="email" className="username" type="text"/></p>
        <p>PW: <input name="password" className="password" type="text"/></p>
        <button onClick={(e) => attemptLogin(e)}>
          Login
>>>>>>> 870cad4c97baf892c4a18e665a4fcd687252410b
        </button>
        {message && <p>{message}</p>}
        </form>
      </div>
    </Page>
  );
}

export default Login;
