import { lazy, Suspense } from "react";
import { useAuth } from "./contexts/AuthContext";

const AuthApp = lazy(() => import("./AuthApp"));
const UnauthApp = lazy(() => import("./UnauthApp"));

function App() {
  const { name } = useAuth();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {name ? <AuthApp /> : <UnauthApp />}
    </Suspense>
  );
}

export default App;
