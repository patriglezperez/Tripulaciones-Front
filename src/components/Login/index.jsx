import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import googleLogo from "../../assets/img/logoGoogle.svg";

export default function Login() {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();
  const [currentUser, setCurrentUser] = useState(user);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
    const logged = user === null ? false : true;
    setIsLogged(logged);
  }, [user]);

  const messageToBack = async () => {
    const token = await headerToken();
    try {
      const res = await axios.get("http://localhost:3003/api/test", {
        headers: {
          ...token,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login container">
      <h1>Login</h1>
      <form className="form">
        <input
          className="input"
          type="email"
          placeholder="Correo"
          name="email"
        />

        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          name="password"
        />

        <button type="submit" className="primary-button">
          Login
        </button>
      </form>
      <p className="divider">ó</p>
      {/* {isLogged ? currentUser.displayName : "Not logged"} */}
      {isLogged ? <button onClick={async () => signout()}>Signout</button> : ""}
      <button
        className="button-google primary-button"
        onClick={() => loginWithGoogle()}
      >
        <img src={googleLogo}></img>
        Login with Google
      </button>
      {/* <button onClick={() => messageToBack()}>Get to server with header</button> */}
    </div>
  );
}
