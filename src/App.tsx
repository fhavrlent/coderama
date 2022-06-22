import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./Router";
import { store, persistor } from "./store";

import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

export default App;
