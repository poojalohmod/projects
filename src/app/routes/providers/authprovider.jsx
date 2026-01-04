import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../../services/auth.service";
import { subscribeToAuth } from "../../services/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = subscribeToAuth((u) => {
      setUser(u || null);
      setReady(true);
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    ready,
    async login(email, password) {
      const u = await AuthService.login(email, password);
      setUser(u);
    },
    async signup(email, password) {
      const u = await AuthService.signup(email, password);
      setUser(u);
    },
    async logout() {
      await AuthService.logout();
      setUser(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
