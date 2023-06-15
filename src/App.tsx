import { ContextProvider } from "./auth/useContext";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ContextProvider>
        <Layout />
    </ContextProvider>
  );
}

export default App;
