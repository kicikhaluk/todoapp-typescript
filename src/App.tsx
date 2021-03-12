import { lazy, Suspense } from "react";
import Loading from "./components/UI/Loading/Loading";
import { useAuth } from "./contexts/AuthContext";

const AuthApp = lazy(() => import("./AuthApp"));
const UnauthApp = lazy(() => import("./UnauthApp"));

function App() {
  const { name } = useAuth();
  return (
    <Suspense fallback={<Loading />}>
      {name ? <AuthApp /> : <UnauthApp />}
    </Suspense>
  );
}

export default App;
