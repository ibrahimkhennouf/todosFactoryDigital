interface AuthContextType {
  user: any;
  signin: (email: string, newUser: boolean) => any;
}

import { createContext, useState } from "react";
import useLogin from "../hooks/useLogin";

let AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(localStorage.getItem("user"));
  const { login, signup } = useLogin();

  let signin = async (email: string, newUser: boolean) => {
    let user;
    if (newUser) {
      user = await signup(email);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: Object.keys(user)[0], id: user.id })
      );
      setUser({ email: Object.keys(user)[0], id: user.id });
    } else {
      user = await login(email);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user[0].email, id: user[0].id })
      );
      setUser({ email: user[0].email, id: user[0].id });
    }
    return user;
  };

  let value = { user, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
