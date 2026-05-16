import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060D1A]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]">404</h1>
        <p className="mb-6 text-xl text-white/60">Página não encontrada</p>
        <Link to="/" className="text-primary underline hover:text-primary/80 transition-colors">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
