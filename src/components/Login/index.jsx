import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";

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
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      {isLogged ? currentUser.displayName : "Not logged"}
      {isLogged ? <button onClick={async () => signout()}>Signout</button> : ""}
      <button onClick={() => loginWithGoogle()}>Login with Google</button>
      <button onClick={() => messageToBack()}>Get to server with header</button>
    </div>
  );
}
