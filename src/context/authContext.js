import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase/firebase";
import axios from "axios";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isBusiness, setIsBusiness] = useState(false);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const updatename = (createdUser, firstname, lastname) =>
    updateProfile(createdUser, {
      displayName: `${firstname.charAt(0).toUpperCase()}. ${
        lastname.charAt(0).toUpperCase() + lastname.slice(1)
      }`,
    });
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

  const signout = () => signOut(auth);
  const headerToken = async () => {
    const token = await auth.currentUser?.getIdToken();
    return {
      authorization: `Bearer ${token}`,
    };
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);
  const retriveUserData = async () => {
    const token = await headerToken();
    try {
      const userData = axios.get("http://localhost:3001/api", {
        headers: {
          ...token,
        },
      });
      setUser((prev) =>{
        let copyUser = prev;
        copyUser.userData = userData;
        return copyUser;
      })
    } catch (error) {}
  };
  useEffect(() => {
    if(user){
    retriveUserData();
  }
  }, [user]);
  return (
    <authContext.Provider
      value={{
        signup,
        updatename,
        login,
        user,
        signout,
        loading,
        loginWithGoogle,
        headerToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
