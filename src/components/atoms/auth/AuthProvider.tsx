/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import { useDispatch } from "react-redux";
import { useGetProfile } from "../../../redux/features/profileSlice/profile.slice";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: any }) => {
  const dispatch: any = useDispatch();
  const [initializing, setInitializing] = useState<boolean>(true);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await dispatch(useGetProfile());
          if (response?.payload?.data) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
            localStorage.removeItem("access_token");
          }
        } catch (error: any) {
          console.error(error.stack);
        }
      }
      setInitializing(false);
    }

    loadUser();
  }, [dispatch]);

  function onLogin() {
    setAuthenticated(true);
  }

  function onLogout() {
    setAuthenticated(false);
    localStorage.removeItem("access_token");
  }

  return (
    <AuthContext.Provider
      value={{
        initializing,
        setInitializing,
        authenticated,
        setAuthenticated,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { authenticated, initializing } = useAuth();

    useEffect(() => {
      if (!authenticated && !initializing) navigate("/login");
      if (authenticated && !initializing) setIsLoading(false);
    }, [authenticated, initializing, navigate]);

    if (isLoading) return <div>Loading...</div>;

    return <Component {...props} />;
  };
}

export function withoutAuth(Component: any) {
  return function WithoutAuth(props: any) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { authenticated, initializing } = useAuth();

    useEffect(() => {
      if (authenticated && !initializing) navigate("/");
      if (!authenticated && !initializing) setIsLoading(false);
    }, [authenticated, initializing, navigate]);

    if (isLoading) return <div>Loading...</div>;

    return <Component {...props} />;
  };
}
