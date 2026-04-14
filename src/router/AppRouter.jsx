import { useUser } from "../context/UserContext";
import Login from "../components/Login";
import Menu from "../components/Menu";

export default function AppRouter() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111b21] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#00a884] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return user ? <Menu /> : <Login />;
}