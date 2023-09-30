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
        <h1>Login</h1>
        <form action="" method="post">
        <p>ID: <input name="email" className="username" type="text"/></p>
        <p>PW: <input name="password" className="password" type="text"/></p>
        <button onClick={(e) => attemptLogin(e)}>
          Login
        </button>
        {message && <p>{message}</p>}
        </form>
      </div>
    </Page>
  );
}

export default Login;
