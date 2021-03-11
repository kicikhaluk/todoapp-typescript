import { TodoCardContextProvider } from "./components/context/TodoCardContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <TodoCardContextProvider>
      <Layout>
        <HomePage />
      </Layout>
    </TodoCardContextProvider>
  );
}

export default App;
