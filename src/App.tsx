import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import RequireAuth from "./middleWare/requireAuth";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
