import { ThemeProvider } from "@/contexts/theme-context";
// import { LandingPage } from "@/components/LandingPage/landing-page";
import { useSelector } from "react-redux";
import { RootState } from "@/types/rootState";
import { AuthenticationPage } from "@/components/AuthenticationPage/auth-page";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.user.currentUser);
  return (
    <ThemeProvider>{isLoggedIn ? null : <AuthenticationPage />}</ThemeProvider>
  );
}

export default App;
