import React, { useContext } from "react";

export interface AuthContextProps {
  initializing: boolean;
  setInitializing: (event: any) => void;
  authenticated: boolean;
  setAuthenticated: (event: any) => void;
  onLogin: () => void;
  onLogout: () => void;
}

/* istanbul ignore next */
const noop = () => {};

export const AuthContext = React.createContext<AuthContextProps>({
  initializing: true,
  setInitializing: noop,
  authenticated: false,
  setAuthenticated: noop,
  onLogin: noop,
  onLogout: noop,
});

export const useAuth = () => useContext(AuthContext);
