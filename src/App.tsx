import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { Router } from "./Router";
import { store } from "./store";

import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
    },
  },
});

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Provider>
);

export default App;
