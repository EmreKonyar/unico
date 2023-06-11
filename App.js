import React from "react";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthProvider>
  );
};

export default App;
