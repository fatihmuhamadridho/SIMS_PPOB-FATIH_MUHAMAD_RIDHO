import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/RouterPublic";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { AuthProvider } from "./components/atoms/auth/AuthProvider";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MantineProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </MantineProvider>
    </ReduxProvider>
  );
};

export default App;
